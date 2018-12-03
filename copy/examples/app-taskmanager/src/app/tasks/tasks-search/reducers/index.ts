import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { Task } from "../../common/models/";
import * as fromTaskSearchEntities from './task-search-entities.reducer';
import * as fromTaskSearchSelected from './task-search-selected.reducer';
import * as fromTaskSearchCount from './task-search-count.reducer';
import * as fromTaskSearchSorting from './task-search-sorting.reducer';
import * as fromTaskSearchFilter from './task-search-filter.reducer';
import * as fromTaskSearchSettings from './task-search-settings.reducer';
import * as fromTaskSearchNotification from './task-search-notification.reducer';


// ----------------------------------
// ----------- Tasks ----------------
// ----------------------------------

export interface TaskSearchState {
  entities: fromTaskSearchEntities.State,
  selected: fromTaskSearchSelected.State,
  count: fromTaskSearchCount.State,
  sorting: fromTaskSearchSorting.State,
  filter: fromTaskSearchFilter.State
  settings: fromTaskSearchSettings.State,
  notification: fromTaskSearchNotification.State,
  // statistics: fromTaskTileSettings.State
}

export interface State {
  taskSearch: TaskSearchState
}

export const reducers: ActionReducerMap<TaskSearchState> = {
  entities: fromTaskSearchEntities.reducer,
  selected: fromTaskSearchSelected.reducer,
  count: fromTaskSearchCount.reducer,
  sorting: fromTaskSearchSorting.reducer,
  filter: fromTaskSearchFilter.reducer,
  settings: fromTaskSearchSettings.reducer,
  notification: fromTaskSearchNotification.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const getTaskSearchState = createFeatureSelector<State, TaskSearchState>('taskSearch');

export const getTaskSearchEntitiesState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.entities
);

const getTaskSearchSelectedState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.selected
);

export const getTaskSearchSelected = createSelector(
  getTaskSearchSelectedState,
  (state: fromTaskSearchSelected.State) => state
);

export const getTaskSearchCountState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.count
);

export const getTaskSearchCount = createSelector(
  getTaskSearchCountState,
  (state: fromTaskSearchCount.State) => state
);

const getTaskSearchSortingState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.sorting
);

export const getTaskSearchSorting = createSelector(
  getTaskSearchSortingState,
  (state: fromTaskSearchSorting.State) => state
);

const getTaskSearchFilterState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.filter
);

export const getTaskSearchFilter = createSelector(
  getTaskSearchFilterState,
  (state: fromTaskSearchFilter.State) => state
);

const getTaskSearchSettingsState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.settings
);

const getTaskSearchNotificationState = createSelector(
  getTaskSearchState,
  (state: TaskSearchState) => state.notification
);

export const getTaskSearchNotification = createSelector(
  getTaskSearchNotificationState,
  (state: fromTaskSearchNotification.State) => state
);

export const getListIsLoading = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getListIsLoading
);

export const getTaskIsCreating = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getTaskIsCreating
);

export const getTaskIsUpdating = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getTaskIsUpdating
);

export const getListLoadingError = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getListLoadingError
);

// <Tasks filtered by "DoneCheckbox" state>
export const getShowDoneTasks = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getShowDoneTasks
);

export const getAllTasks = createSelector(
  getTaskSearchEntitiesState,
  fromTaskSearchEntities.getAllTasks
);

export const getDoneFilteredTasks = createSelector(
  getAllTasks,
  getShowDoneTasks,
  (tasks: Task[], showDoneTasks: boolean) => {
    if(!showDoneTasks){
      return tasks.filter((t: Task) => t.done === false)
    }
    return tasks;
  }
);
// </Tasks filtered by "DoneCheckbox" state>

export const getShowAddTask = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getShowAddTask
);

export const getShowFilter = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getShowFilter
);

export const getDefaultTask = createSelector(
  getTaskSearchSettingsState,
  fromTaskSearchSettings.getDefaultTask
);
