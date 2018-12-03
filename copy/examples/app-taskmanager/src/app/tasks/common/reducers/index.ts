import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import *  as fromUserEntities from './user-entities.reducer';


// ----------------------------------
// ----------- Tasks ----------------
// ----------------------------------

export interface TasksCommonState {
  userEntities: fromUserEntities.State
}

export interface State {
  tasksCommon: TasksCommonState
}

export const reducers: ActionReducerMap<TasksCommonState> = {
  userEntities: fromUserEntities.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const getUsersState = createFeatureSelector<State, TasksCommonState>('tasksCommon');

export const getUsersEntitiesState = createSelector(
  getUsersState,
  state => state.userEntities
);

export const getUsersEntities = createSelector(
  getUsersEntitiesState,
  fromUserEntities.selectEntities
);
