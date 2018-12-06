import { Action } from '@ngrx/store';
import { LoginFields } from '../models/login-fields.model';
import { LoginResult } from '../models/login-result.model';

export enum LoginActionTypes {
  Init              = '[Login] Init',
  Login             = '[Login] Login',
  SetLoginResult    = '[Login] LoginResult',
  UpdateLoginFields = '[Login] Update login fields'
}

export class Init implements Action {
  readonly type = LoginActionTypes.Init;
  constructor(public payload: LoginFields) {}
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
  constructor(public payload: object) {}
}

export class SetLoginResult implements Action {
  readonly type = LoginActionTypes.SetLoginResult;
  constructor(public payload: LoginResult) {}
}

export class UpdateLoginFields implements Action {
  readonly type = LoginActionTypes.UpdateLoginFields;
  constructor(public payload: LoginFields) {}
}

export type LoginActions = Init | Login | SetLoginResult | UpdateLoginFields;
