import { Action } from "@ngrx/store";
import { User } from "../models/index";

export enum UserActionTypes {
  LoadUsers = '[Users] load users',
  LoadUsersSuccess = '[Users] load users success',
  LoadUsersError = '[Users] load users error'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor() { }
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;

  constructor(public payload: { users: User[] }) { }
}

export class LoadUsersError implements Action {
  readonly type = UserActionTypes.LoadUsersError;

  constructor(public payload: {e: any}) { }
}


export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersError;
