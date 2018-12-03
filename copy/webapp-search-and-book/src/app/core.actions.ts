import { Action } from '@ngrx/store';

export const CORE_ACTION = {
  UPDATE_CLP_CONFIG: '[Core Action] CLP config updated',
  USER_LOGGED_IN: '[Core Action] User is logged in'
};

export class UpdateClpConfig implements Action {
  readonly type = CORE_ACTION.UPDATE_CLP_CONFIG;
  constructor(public payload: any) { }
}
export class UserLoggedIn implements Action {
  readonly type = CORE_ACTION.USER_LOGGED_IN;
  constructor(public payload?: any) { }
}

export type CoreActions = UpdateClpConfig | UserLoggedIn;
