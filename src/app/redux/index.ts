import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromLogin from './reducers/login.reducer';

export interface State {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer
};

const loginState = state => state.app.login;

export const getLoginState = createSelector(loginState);
