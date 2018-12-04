import { Action } from '@ngrx/store';
import { Fields } from '../models/login.model';

export enum LoginActionTypes {
  Init          = '[Login] Init',
  UpdateFields  = '[Login] Update fields',
  Submit        = '[Login] Submit'
}


export class Init implements Action {
  readonly type = LoginActionTypes.Init;

  constructor(public payload: Fields) { }
}

export class Submit implements Action {
  readonly type = LoginActionTypes.Submit;

  constructor(public payload: { params: any }) { }
}

export class UpdateFields implements Action {
  readonly type = LoginActionTypes.UpdateFields;

  constructor(public payload: Fields) { }
}

export type LoginActions = Init | Submit | UpdateFields;
