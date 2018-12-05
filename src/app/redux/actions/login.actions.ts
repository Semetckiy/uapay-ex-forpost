import { Action } from '@ngrx/store';
import { Fields as LoginFields } from '../models/login-fields.model';
import { Fields as LoginResults } from '../models/login-results.model';

export enum LoginActionTypes {
  Init          = '[Login] Init',
  Login         = '[Login] Login',
  Logined       = '[Login] Logined',
  UpdateFields  = '[Login] Update fields'
}

export class Init implements Action {
  readonly type = LoginActionTypes.Init;
  constructor(public payload: LoginFields) { }
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
  constructor(public payload: LoginResults) { }
}

export class Logined implements Action {
  readonly type = LoginActionTypes.Logined;
  constructor(public payload: {}) { }
}

export class UpdateFields implements Action {
  readonly type = LoginActionTypes.UpdateFields;
  constructor(public payload: LoginFields) { }
}

export type LoginActions = Init | Login | Logined | UpdateFields;
