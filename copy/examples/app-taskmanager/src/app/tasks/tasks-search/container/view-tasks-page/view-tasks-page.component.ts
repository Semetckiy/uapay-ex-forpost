import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from "rxjs";
import {
  getDefaultTask,
  getDoneFilteredTasks,
  getListIsLoading,
  getListLoadingError,
  getShowAddTask,
  getShowDoneTasks,
  getShowFilter,
  getTaskIsCreating,
  getTaskIsUpdating,
  getTaskSearchCountState,
  getTaskSearchFilter,
  getTaskSearchNotification,
  getTaskSearchSelected,
  getTaskSearchSorting
} from '../../reducers';
import { TaskEditSubmitType, TaskEditResolveType } from "../../components/edit-task/edit-task.component";
import { Count, SortSettings, Task, TasksFilter, User } from "../../../common/models";
import { Dictionary } from "@ngrx/entity";
import { FilterUrlService } from "../../../common/services/filter-url.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { distinctUntilChanged, map } from "rxjs/operators";
import { SortUrlService } from "../../../common/services/sort-url.service";
import {
  CancelAddTask,
  CancelEditTask,
  CreateTask,
  EditTask,
  ExpandTask,
  Filter,
  ResetFilter,
  ResolveTask,
  ShowAddTask,
  Sort,
  ToggleShowDoneTasksFilter,
  ToggleShowFilter,
  UpdateTask
} from "../../../common/actions/task-search.actions";
import { Go } from "../../../common/actions/routing.actions";
import { getUsersEntities } from "../../../common/reducers";
import { NotificationSettingsType } from "../../components";

export type SelectedTaskType = {
  id: number;
  expanded: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-view-tasks-page',
  templateUrl: './view-tasks-page.component.html',
  styleUrls: ['./view-tasks-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTasksPageComponent{

  tasks$: Observable<Task[]>;
  defaultTask$: Observable<Task>;
  selectedTask$: Observable<SelectedTaskType>;
  showAddPanel$: Observable<boolean>;
  showFilterPanel$: Observable<boolean>;
  users$: Observable<Dictionary<User>>;
  sorting$: Observable<SortSettings>;
  filter$: Observable<TasksFilter>;
  notification$: Observable<NotificationSettingsType>;
  taskCount$: Observable<Count>;
  showDoneTasks$: Observable<boolean>;
  listIsLoading$: Observable<boolean>;
  listLoadingError$: Observable<boolean>;
  taskIsUpdating$: Observable<boolean>;
  taskIsCreating$: Observable<boolean>;


  private subscriptions: Subscription[];

  constructor(private store: Store<any>,
              private filterUrlService: FilterUrlService,
              private sortUrlService: SortUrlService,
              activeRoute: ActivatedRoute) {

    this.tasks$ = this.store.pipe(
      select(getDoneFilteredTasks)
    );

    this.listIsLoading$ = this.store.pipe(
      select(getListIsLoading)
    );

    this.listLoadingError$ = this.store.pipe(
      select(getListLoadingError)
    );

    this.taskIsUpdating$ = this.store.pipe(
      select(getTaskIsUpdating)
    );

    this.taskIsCreating$ = this.store.pipe(
      select(getTaskIsCreating)
    );

    this.notification$ = this.store.pipe(
      select(getTaskSearchNotification)
    );

    this.users$ = this.store.pipe(
      select(getUsersEntities)
    );

    this.taskCount$ = this.store.pipe(
      select(getTaskSearchCountState)
    );

    this.sorting$ = this.store.pipe(
      select(getTaskSearchSorting)
    );

    this.showAddPanel$ = this.store.pipe(
      select(getShowAddTask)
    );

    this.filter$ = this.store.pipe(
      select(getTaskSearchFilter)
    );

    this.showFilterPanel$ = this.store.pipe(
      select(getShowFilter)
    );

    this.selectedTask$ = this.store.pipe(
      select(getTaskSearchSelected),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
    );

    this.defaultTask$ = this.store.pipe(
      select(getDefaultTask)
    );

    this.showDoneTasks$ = this.store.pipe(
      select(getShowDoneTasks)
    );

    const queryParams$ = activeRoute.queryParamMap.pipe(
      map((paramMap: ParamMap) => ({
        filter: filterUrlService.fromQuery(paramMap),
        sorting: sortUrlService.fromQuery(paramMap)
      }))
    );

    this.subscriptions = [
      queryParams$.pipe(
        map(({filter}) => filter),
        map((filter: TasksFilter) => new Filter({filter}))
      ).subscribe((a: Filter) => store.dispatch(a)),
      queryParams$.pipe(
        map(({sorting}) => sorting),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
        map((sorting: SortSettings) => new Sort({sorting}))
      ).subscribe((a: Sort) => store.dispatch(a))
    ];

  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  toggleShowDoneTasks() {
    this.store.dispatch(new ToggleShowDoneTasksFilter());
  }

  onTaskCancel(task: Task) {
    this.store.dispatch(new CancelEditTask({task}));
  }

  onTaskDone(obj: TaskEditResolveType) {
    this.store.dispatch(new ResolveTask(obj));
  }

  onTaskEdit(task: Task) {
    this.store.dispatch(new EditTask({task}));
  }

  onTaskExpand(task: Task) {
    this.store.dispatch(new ExpandTask({task}));
  }

  onTaskFilter(filter: TasksFilter, random: number = Date.now()){
    this.store.dispatch(new Go({
      path: ['tasks'],
      queryParams: {
        ...this.filterUrlService.toQuery(filter),
        r: random
      },
      extras: {queryParamsHandling: "merge"}
    }));
  }

  onFilterReset() {
    this.store.dispatch(new ResetFilter());
  }

  onTaskSave(obj: TaskEditSubmitType) {
    this.store.dispatch(new UpdateTask(obj));
  }

  onTasksSort(settings: SortSettings){
    this.store.dispatch(new Go({
      path: ['tasks'],
      queryParams: this.sortUrlService.toQuery(settings),
      extras: {queryParamsHandling: "merge"}
    }));
  }

  onNewTaskAddClick() {
    this.store.dispatch(new ShowAddTask());
  }

  onNewTaskCancel() {
    this.store.dispatch(new CancelAddTask());
  }

  onNewTaskSave(obj: TaskEditSubmitType) {
    this.store.dispatch(new CreateTask(obj));
  }

  onToggleExpand() {
    this.store.dispatch(new ToggleShowFilter());
  }

}
