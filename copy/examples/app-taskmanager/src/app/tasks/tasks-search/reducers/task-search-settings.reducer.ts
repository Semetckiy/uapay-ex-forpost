import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { Task } from "../../common/models/";

export interface State {
  defaultTask: Task,
  showDoneTasks: boolean,
  showFilter: boolean,
  showAddTask: boolean
  listIsLoading: boolean
  taskIsUpdating: boolean
  taskIsCreating: boolean
  listLoadingError: boolean
}

const now =  new Date();

export const initialState: State = {
  defaultTask: {
    title: '',
    done: false,
    dueDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
    description: '',
    bookingRef: '',
    priority: '',
    assigneeSign: ''
  },
  showDoneTasks: false,
  showFilter: false,
  showAddTask: false,
  listIsLoading: false,
  listLoadingError: false,
  taskIsCreating: false,
  taskIsUpdating: false
};

export function reducer(
  state = initialState,
  action: TaskSearchActions
): State {
  switch (action.type) {
    case TaskSearchActionTypes.LoadTasks: {
      return {
        ...state,
        listIsLoading: true,
        listLoadingError: false
      }
    }

    case TaskSearchActionTypes.UpdateTask: {
      return {
        ...state,
        taskIsUpdating: true
      }
    }

    case TaskSearchActionTypes.UpdateTaskSuccess:
    case TaskSearchActionTypes.UpdateTaskError: {
      return {
        ...state,
        taskIsUpdating: false
      }
    }

    case TaskSearchActionTypes.LoadTasksSuccess: {
      return {
        ...state,
        listIsLoading: false
      }
    }

    case TaskSearchActionTypes.LoadTasksError: {
      return {
        ...state,
        listIsLoading: false,
        listLoadingError: true
      }
    }

    case TaskSearchActionTypes.CreateTask: {
      return {
        ...state,
        taskIsCreating: true,
      }
    }

    case TaskSearchActionTypes.CreateTaskError: {
      return {
        ...state,
        taskIsCreating: false,
      }
    }

    case TaskSearchActionTypes.CreateTaskSuccess: {
      return {
        ...state,
        showAddTask: false,
        taskIsCreating: false,
        defaultTask: {...state.defaultTask}
      }
    }

    case TaskSearchActionTypes.CancelAddTask: {
      return {
        ...state,
        showAddTask: false
      }
    }

    case TaskSearchActionTypes.ToggleShowDoneTasksFilter: {
      return {
        ...state,
        showDoneTasks: !state.showDoneTasks
      }
    }

    case TaskSearchActionTypes.ToggleShowFilter: {
      return {
        ...state,
        showFilter: !state.showFilter
      }
    }



    case TaskSearchActionTypes.ShowAddTask: {
      return {
        ...state,
        showAddTask: true
      }
    }

    default: {
      return state;
    }
  }
}

export const getDefaultTask = (state: State) => state.defaultTask;
export const getShowDoneTasks = (state: State) => state.showDoneTasks;
export const getShowAddTask = (state: State) => state.showAddTask;
export const getShowFilter = (state: State) => state.showFilter;
export const getListIsLoading = (state: State) => state.listIsLoading;
export const getTaskIsCreating = (state: State) => state.taskIsCreating;
export const getTaskIsUpdating = (state: State) => state.taskIsUpdating;
export const getListLoadingError = (state: State) => state.listLoadingError;
