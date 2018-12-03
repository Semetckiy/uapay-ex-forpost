import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { Task } from "../../../common/models/";
import * as TaskTileActions from "../../../common/actions/task-tile.actions";
import { TasksTileAddSubmitType, TaskTileResolveType } from "../../components";
import {
  getAllTodoTasks,
  getDefaultTask,
  getListIsLoading,
  getListLoadingError,
  getTaskIsCreating,
  getTaskTileAddVisible,
  getTaskTileNotification,
  State
} from "../../reducers";

@Component({
  selector: 'app-tasks-tile-page',
  templateUrl: './tasks-tile-page.component.html',
  styleUrls: ['./tasks-tile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksTilePageComponent{

  tasks$: Observable<Task[]>;
  defaultTask$: Observable<Task>;
  taskTileAddVisible$: Observable<boolean>;
  notification$: Observable<any>;
  taskIsCreating$: Observable<boolean>;
  listIsLoading$: Observable<boolean>;
  listLoadingError$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new TaskTileActions.LoadTasks());

    this.tasks$ = this.store.pipe(
      select(getAllTodoTasks)
    );

    this.taskIsCreating$ = this.store.pipe(
      select(getTaskIsCreating)
    );

    this.listIsLoading$ = this.store.pipe(
      select(getListIsLoading)
    );

    this.listLoadingError$ = this.store.pipe(
      select(getListLoadingError)
    );

    this.taskTileAddVisible$ = this.store.pipe(
      select(getTaskTileAddVisible)
    );

    this.defaultTask$ = this.store.pipe(
      select(getDefaultTask)
    );

    this.notification$ = this.store.pipe(
      select(getTaskTileNotification)
    );


  }

  onTaskSelect(task: Task) {
    this.store.dispatch(new TaskTileActions.Select({task}));
  }

  onAddExpand() {
    this.store.dispatch(new TaskTileActions.ShowTaskTileAdd());
  }

  onAddHide() {
    this.store.dispatch(new TaskTileActions.HideTaskTileAdd());
  }

  onAddSubmit(obj: TasksTileAddSubmitType) {
    this.store.dispatch(new TaskTileActions.CreateTask(obj));
  }

  onTaskDone(obj: TaskTileResolveType){
    this.store.dispatch(new TaskTileActions.ResolveTask(obj));
  }
}
