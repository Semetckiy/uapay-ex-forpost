import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap, skip, switchMap, takeUntil } from "rxjs/operators";
import {
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  ResolveTask,
  ResolveTaskError,
  ResolveTaskSuccess,
  TaskTileActionTypes
} from "../../common/actions/task-tile.actions";
import { GetTasksResponseType, TasksHttpService } from "../../common/services/tasks-http.service";
import { TasksParserFormatterService } from "../../common/services/tasks-parser-formatter.service";
import { of } from "rxjs";
import { Task } from "../../common/models/index";
import { Go } from "../../common/actions/routing.actions";

@Injectable()
export class TaskTileEffects {

  constructor(private actions$: Actions,
              private tasksHttp: TasksHttpService,
              private tasksParserFormatterService: TasksParserFormatterService) {
  }

  @Effect() createTask$ = this.actions$.pipe(
    ofType(TaskTileActionTypes.CreateTask),
    map(({payload: {original, update}}: CreateTask) => ({
      ...original,
      ...update
    })),
    switchMap((task: Task) => {
      return this.tasksHttp.addTask(task).pipe(
        map((task: Task) => new CreateTaskSuccess({task})),
        catchError((e: any) => of(new CreateTaskError({e})))
      );
    })
  );

  @Effect() resolveTask$ = this.actions$.pipe(
    ofType(TaskTileActionTypes.ResolveTask),
    map((action: ResolveTask) => action.payload),
    mergeMap(({task, checked}) => {

      const nextResolve$ = this.actions$.pipe(
        ofType(TaskTileActionTypes.ResolveTask),
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
        catchError((e: any) => of(new ResolveTaskError({e, originalTask: task})))
      );
    })
  );

  @Effect() loadTasks$ = this.actions$.pipe(
    ofType(TaskTileActionTypes.LoadTasks),

    switchMap(() => {
      const nextLoad$ = this.actions$.pipe(
        ofType(TaskTileActionTypes.LoadTasks),
        skip(1)
      );

      return this.tasksHttp.getTasks().pipe(
        takeUntil(nextLoad$),
        map((res: GetTasksResponseType) => new LoadTasksSuccess({tasks: res.tasks})),
        catchError((e) => of(new LoadTasksError({ e })))
      );
    })
  );

  @Effect() routeToTask$ = this.actions$.pipe(
    ofType(TaskTileActionTypes.Select),
    map(() => new Go({path: ['tasks']}))
  );

  @Effect() refresh$ = this.actions$.pipe(
    ofType(
      TaskTileActionTypes.CreateTaskSuccess
    ),
    map(()=> new LoadTasks())
  )
}
