import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClpInitConfig } from '@seco/login/src/app/login.config';
import { CoreActions, CORE_ACTION } from './core.actions';

export const CORE_FEATURE = 'coreWebappDemoReducer';

export interface CoreState {
  clpConfig?: ClpInitConfig;
  loggedIn: boolean;
}

export const coreInitialState: CoreState = {
  loggedIn: false
};

export function coreReducer(state = coreInitialState, action: CoreActions): CoreState {
  switch (action.type) {
    case CORE_ACTION.UPDATE_CLP_CONFIG:
      return Object.assign({}, state, {
        clpConfig: action.payload
    });
    case CORE_ACTION.USER_LOGGED_IN:
      return Object.assign({}, state, {
        loggedIn: true
    });
    default:
      return state;
  }
}

export const selectCore = createFeatureSelector<CoreState>(CORE_FEATURE);
export const selectClpConfig = createSelector(selectCore, (state: CoreState) => state.clpConfig);
export const selectLoggedIn = createSelector(selectCore, (state: CoreState) => state.loggedIn);
