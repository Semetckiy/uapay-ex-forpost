import { Action } from "@ngrx/store";
import { SortSettings, Task, Count, TasksFilter } from "../models/index";
import { Update } from "@ngrx/entity";
import { TaskEditResolveType } from "../../tasks-search/components";

export enum TaskSearchActionTypes {
  ShowAddTask = '[TasksSearch] show add task',
  ClearNotification = '[TasksSearch] clear notification',
  ToggleShowFilter = '[TasksSearch] toggle show filter',
  ToggleShowDoneTasksFilter = '[TasksSearch] toggle show doen tasks filter',
  ExpandTask = '[TasksSearch] expand task',
  EditTask = '[TasksSearch] edit task',
  CancelEditTask = '[TasksSearch] cancel edit task',
  CancelAddTask = '[TasksSearch] cancel add task',
  Select = '[TasksSearch] select',
  Filter = '[TasksSearch] filter',
  ResetFilter = '[TasksSearch] reset filter',
  Sort = '[TasksSearch] sort',
  LoadTasks = '[TasksSearch] load tasks',
  LoadTasksSuccess = '[TasksSearch] load tasks success',
  LoadTasksError = '[TasksSearch] load tasks error',
  CreateTask = '[TasksSearch] create task',
  CreateTaskSuccess = '[TasksSearch] create task success',
  CreateTaskError = '[TasksSearch] create task error',
  ResolveTask = '[TasksSearch] resolve tasks',
  ResolveTaskSuccess = '[TasksSearch] resolve tasks success',
  ResolveTaskError = '[TasksSearch] resolve tasks error',
  LoadCountSuccess = '[TasksCount] load count success',
  UpdateTask = '[TasksSearch] update tasks',
  UpdateTaskSuccess = '[TasksSearch] update tasks success',
  UpdateTaskError = '[TasksSearch] update tasks error'
}

export class ClearNotification implements Action {
  readonly type = TaskSearchActionTypes.ClearNotification;

  constructor() { }
}

export class ToggleShowDoneTasksFilter implements Action {
  readonly type = TaskSearchActionTypes.ToggleShowDoneTasksFilter;

  constructor() { }
}

export class ToggleShowFilter implements Action {
  readonly type = TaskSearchActionTypes.ToggleShowFilter;

  constructor() { }
}

export class CancelAddTask implements Action {
  readonly type = TaskSearchActionTypes.CancelAddTask;

  constructor() { }
}

export class CancelEditTask implements Action {
  readonly type = TaskSearchActionTypes.CancelEditTask;

  constructor(public payload: {task: Task}) { }
}

export class EditTask implements Action {
  readonly type = TaskSearchActionTypes.EditTask;

  constructor(public payload: {task: Task}) { }
}

export class ExpandTask implements Action {
  readonly type = TaskSearchActionTypes.ExpandTask;

  constructor(public payload: {task: Task}) { }
}

export class Filter implements Action {
  readonly type = TaskSearchActionTypes.Filter;

  constructor(public payload: {filter: TasksFilter}) { }
}

export class ResetFilter implements Action {
  readonly type = TaskSearchActionTypes.ResetFilter;

  constructor() { }
}

export class Sort implements Action {
  readonly type = TaskSearchActionTypes.Sort;

  constructor(public payload: {sorting: SortSettings}) { }
}

export class ShowAddTask implements Action {
  readonly type = TaskSearchActionTypes.ShowAddTask;

  constructor() { }
}

export class LoadTasks implements Action {
  readonly type = TaskSearchActionTypes.LoadTasks;

  constructor() { }
}

export class LoadTasksSuccess implements Action {
  readonly type = TaskSearchActionTypes.LoadTasksSuccess;

  constructor(public payload: { tasks: Task[] }) { }
}

export class LoadTasksError implements Action {
  readonly type = TaskSearchActionTypes.LoadTasksError;

  constructor(public payload: {e: any}) { }
}

export class Select implements Action {
  readonly type = TaskSearchActionTypes.Select;

  constructor(public payload: {task: Task}) { }
}

export class CreateTask implements Action {
  readonly type = TaskSearchActionTypes.CreateTask;

  constructor(public payload: {original: Task, update: Task}) { }
}

export class CreateTaskSuccess implements Action {
  readonly type = TaskSearchActionTypes.CreateTaskSuccess;

  constructor(public payload: { task: Task }) {}
}

export class CreateTaskError implements Action {
  readonly type = TaskSearchActionTypes.CreateTaskError;

  constructor(public payload: { e: any }) {}
}

export class ResolveTask implements Action {
  readonly type = TaskSearchActionTypes.ResolveTask;

  constructor(public payload: TaskEditResolveType) { }
}

export class ResolveTaskSuccess implements Action {
  readonly type = TaskSearchActionTypes.ResolveTaskSuccess;

  constructor(public payload: { task: Update<Task> }) {}
}

export class ResolveTaskError implements Action {
  readonly type = TaskSearchActionTypes.ResolveTaskError;

  constructor(public payload: { e: any, originalTask: Task }) {}
}

export class LoadCountSuccess implements Action {
  readonly type = TaskSearchActionTypes.LoadCountSuccess;

  constructor(public payload: {count: Count}) { }
}

export class UpdateTask implements Action {
  readonly type = TaskSearchActionTypes.UpdateTask;

  constructor(public payload: {original: Task, update: Task}) { }
}

export class UpdateTaskSuccess implements Action {
  readonly type = TaskSearchActionTypes.UpdateTaskSuccess;

  constructor(public payload: { task: Update<Task> }) {}
}

export class UpdateTaskError implements Action {
  readonly type = TaskSearchActionTypes.UpdateTaskError;

  constructor(public payload: { e: any }) {}
}

export type TaskSearchActions = ShowAddTask
  | ClearNotification
  | ToggleShowFilter
  | ToggleShowDoneTasksFilter
  | ExpandTask
  | EditTask
  | CancelEditTask
  | CancelAddTask
  | Select
  | Filter
  | ResetFilter
  | Sort
  | LoadTasks
  | LoadTasksSuccess
  | LoadTasksError
  | CreateTask
  | CreateTaskSuccess
  | CreateTaskError
  | ResolveTask
  | ResolveTaskSuccess
  | ResolveTaskError
  | LoadCountSuccess
  | UpdateTask
  | UpdateTaskSuccess
  | UpdateTaskError;
