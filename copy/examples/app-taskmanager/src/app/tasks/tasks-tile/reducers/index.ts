import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import *  as fromTaskTileEntities from './task-tile-entities.reducer';
import *  as fromTaskTileSettings from './task-tile-settings.reducer';
import *  as fromTaskTileNotification from './task-tile-notification.reducer';


// ----------------------------------
// ----------- Tasks ----------------
// ----------------------------------

export interface TaskTileState {
  entities: fromTaskTileEntities.State,
  settings: fromTaskTileSettings.State,
  notification: fromTaskTileNotification.State
}

export interface State {
  taskTile: TaskTileState
}

export const reducers: ActionReducerMap<TaskTileState> = {
  entities: fromTaskTileEntities.reducer,
  settings: fromTaskTileSettings.reducer,
  notification: fromTaskTileNotification.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const getTaskTileState = createFeatureSelector<State, TaskTileState>('taskTile');

export const getTaskTileEntitiesState = createSelector(
  getTaskTileState,
  state => state.entities
);

const getTaskTileNotificationState = createSelector(
  getTaskTileState,
  state => state.notification
);

export const getTaskTileNotification = createSelector(
  getTaskTileNotificationState,
  state => state
);

export const getTaskTileSettingsState = createSelector(
  getTaskTileState,
  state => state.settings
);

export const getAllTodoTasks = createSelector(
  getTaskTileEntitiesState,
  fromTaskTileEntities.getAllTodoTasks
);

export const getTaskTileAddVisible = createSelector(
  getTaskTileSettingsState,
  fromTaskTileSettings.getTaskTileAddVisible
);

export const getDefaultTask = createSelector(
  getTaskTileSettingsState,
  fromTaskTileSettings.getDefaultTask
);

export const getListIsLoading = createSelector(
  getTaskTileSettingsState,
  fromTaskTileSettings.getListIsLoading
);

export const getTaskIsCreating = createSelector(
  getTaskTileSettingsState,
  fromTaskTileSettings.getTaskIsCreating
);

export const getListLoadingError = createSelector(
  getTaskTileSettingsState,
  fromTaskTileSettings.getListLoadingError
);
