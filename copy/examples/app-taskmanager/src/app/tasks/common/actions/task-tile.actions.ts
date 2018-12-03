import { Action } from "@ngrx/store";
import { Task } from "../models/index";
import { Update } from "@ngrx/entity";
import { TaskTileResolveType } from "../../tasks-tile/components";

export enum TaskTileActionTypes {
  ClearNotification = '[TasksTile] clear notification',
  ShowTaskTileAdd = '[TasksTile] show task tile add',
  HideTaskTileAdd = '[TasksTile] hide task tile add',
  Select = '[TasksTile] select',
  LoadTasks = '[TasksTile] load tasks',
  LoadTasksSuccess = '[TasksTile] load tasks success',
  LoadTasksError = '[TasksTile] load tasks error',
  CreateTask = '[TasksTile] create task',
  CreateTaskSuccess = '[TasksTile] create task success',
  CreateTaskError = '[TasksTile] create task error',
  ResolveTask = '[TasksTile] resolve tasks',
  ResolveTaskSuccess = '[TasksTile] resolve tasks success',
  ResolveTaskError = '[TasksTile] resolve tasks error'
}


export class ClearNotification implements Action {
  readonly type = TaskTileActionTypes.ClearNotification;

  constructor() { }
}

export class ShowTaskTileAdd implements Action {
  readonly type = TaskTileActionTypes.ShowTaskTileAdd;

  constructor() { }
}

export class HideTaskTileAdd implements Action {
  readonly type = TaskTileActionTypes.HideTaskTileAdd;

  constructor() { }
}

export class LoadTasks implements Action {
  readonly type = TaskTileActionTypes.LoadTasks;

  constructor() { }
}

export class LoadTasksSuccess implements Action {
  readonly type = TaskTileActionTypes.LoadTasksSuccess;

  constructor(public payload: { tasks: Task[] }) { }
}

export class LoadTasksError implements Action {
  readonly type = TaskTileActionTypes.LoadTasksError;

  constructor(public payload: {e: any}) { }
}

export class Select implements Action {
  readonly type = TaskTileActionTypes.Select;

  constructor(public payload: {task: Task}) { }
}

export class CreateTask implements Action {
  readonly type = TaskTileActionTypes.CreateTask;

  constructor(public payload: {original: Task, update: Task}) { }
}

export class CreateTaskSuccess implements Action {
  readonly type = TaskTileActionTypes.CreateTaskSuccess;

  constructor(public payload: { task: Task }) {}
}

export class CreateTaskError implements Action {
  readonly type = TaskTileActionTypes.CreateTaskError;

  constructor(public payload: { e: any }) {}
}

export class ResolveTask implements Action {
  readonly type = TaskTileActionTypes.ResolveTask;

  constructor(public payload: TaskTileResolveType) { }
}

export class ResolveTaskSuccess implements Action {
  readonly type = TaskTileActionTypes.ResolveTaskSuccess;

  constructor(public payload: { task: Update<Task> }) {}
}

export class ResolveTaskError implements Action {
  readonly type = TaskTileActionTypes.ResolveTaskError;

  constructor(public payload: { e: any, originalTask: Task }) {}
}

export type TaskTileActions = ShowTaskTileAdd
| HideTaskTileAdd
| ClearNotification
| LoadTasks
| LoadTasksSuccess
| LoadTasksError
| Select
| CreateTask
| CreateTaskSuccess
| CreateTaskError
| ResolveTask
| ResolveTaskSuccess
| ResolveTaskError;
