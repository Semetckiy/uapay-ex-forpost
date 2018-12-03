import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  LoadCountSuccess,
  ResolveTask,
  ResolveTaskError,
  ResolveTaskSuccess,
  TaskSearchActionTypes,
  UpdateTask,
  UpdateTaskError,
  UpdateTaskSuccess
} from '../../common/actions/task-search.actions';
import {
  catchError,
  concatMap, delay,
  filter,
  map,
  mergeMap,
  skip,
  switchMap,
  takeUntil,
  withLatestFrom
} from "rxjs/operators";
import { GetTasksResponseType, TasksHttpService } from "../../common/services/tasks-http.service";
import { Task } from '../../common/models/task.model';
import { of } from "rxjs";
import { select, Store } from "@ngrx/store";
import { SortSettings, TasksFilter } from "../../common/models";
import { FilterUrlService } from "../../common/services/filter-url.service";
import { getTaskSearchFilter, getTaskSearchSorting } from "../reducers";
import { SortUrlService } from "../../common/services/sort-url.service";

@Injectable()
export class TaskSearchEffects {

  constructor(private store: Store<any>,
              private actions$: Actions,
              private tasksHttp: TasksHttpService,
              private filterUrlService: FilterUrlService,
              private sortUrlService: SortUrlService
              ) {
  }

  @Effect() createTask$ = this.actions$.pipe(
    ofType(TaskSearchActionTypes.CreateTask),
    map((action: CreateTask) => action.payload),
    map(({original, update}) => ({...original, ...update})),
    switchMap((task: Task) => {
      return this.tasksHttp.addTask(task).pipe(
        map((task: Task) => new CreateTaskSuccess({task})),
        catchError((e) => of(new CreateTaskError({e})))
      );
    })
  );

  @Effect() loadTasks$ = this.actions$.pipe(
    ofType(TaskSearchActionTypes.LoadTasks),
    withLatestFrom(
      this.store.pipe(select(getTaskSearchFilter)),
      this.store.pipe(select(getTaskSearchSorting))
    ),
    map(([action, filter, sorting]: [LoadTasks, TasksFilter, SortSettings]) => ({
      ...this.filterUrlService.toQuery(filter),
      ...this.sortUrlService.toQuery(sorting)
    })),
    switchMap((params) => {

      const nextSearch$ = this.actions$.pipe(
        ofType(TaskSearchActionTypes.LoadTasks),
        skip(1)
      );

      return this.tasksHttp.getTasks(params).pipe(
        takeUntil(nextSearch$),
        switchMap((res: GetTasksResponseType) => [
          new LoadCountSuccess({count: res.counters }),
          new LoadTasksSuccess({tasks: res.tasks})
        ]),
        catchError((e) => of(new LoadTasksError({ e })))
      );
    })
  );

  @Effect() updateTask$ = this.actions$.pipe(
    ofType(TaskSearchActionTypes.UpdateTask),
    map((action: UpdateTask) => action.payload),
    map(({original, update}) => ({...original, ...update})),
    switchMap((task: Task) => {
      return this.tasksHttp.updateTask(task).pipe(
        map((task: Task) => new UpdateTaskSuccess({
          task: {
            id: task.id,
            changes: task
          }
        })),
        catchError((e) => of(new UpdateTaskError({e})))
      );
    })
  );

  @Effect() resolveTask$ = this.actions$.pipe(
    ofType(TaskSearchActionTypes.ResolveTask),
    map((action: ResolveTask) => action.payload),
    mergeMap(({task, checked}) => {

      const nextResolve$ = this.actions$.pipe(
        ofType(TaskSearchActionTypes.ResolveTask),
        filter((action: ResolveTask) => action.payload.task.id === task.id)
      );

      return this.tasksHttp.updateTask({...task, done: checked}).pipe(
        takeUntil(nextResolve$),
        map((task: Task) => new ResolveTaskSuccess({
          task: {
            id: task.id,
            changes: task
          }
        })),
        catchError((e) => of(new ResolveTaskError({e, originalTask: task})))
      );
    })
  );

  @Effect() refresh$ = this.actions$.pipe(
    ofType(
      TaskSearchActionTypes.Filter,
      TaskSearchActionTypes.Sort,
      TaskSearchActionTypes.UpdateTaskSuccess,
      TaskSearchActionTypes.CreateTaskSuccess
    ),
    map(()=> new LoadTasks())
  )


}
