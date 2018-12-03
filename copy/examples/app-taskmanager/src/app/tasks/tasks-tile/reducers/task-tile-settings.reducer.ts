import { TaskTileActions, TaskTileActionTypes } from "../../common/actions/task-tile.actions";
import { Task } from "../../common/models/";

export interface State {
  defaultTask: Task;
  taskTileAddVisible: boolean;
  listIsLoading: boolean;
  taskIsCreating: boolean;
  listLoadingError: boolean;
}

const now =  new Date();

export const initialState: State = {
  defaultTask: {
    title: '',
    dueDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
    done: false
  },
  taskTileAddVisible: false,
  listIsLoading: false,
  listLoadingError: false,
  taskIsCreating: false
};

export function reducer(
  state = initialState,
  action: TaskTileActions
): State {
  switch (action.type) {
    case TaskTileActionTypes.CreateTaskSuccess: {
      return {
        ...state,
        taskTileAddVisible: false,
        taskIsCreating: false,
        defaultTask: {...state.defaultTask}
      }
    }

    case TaskTileActionTypes.CreateTaskError: {
      return {
        ...state,
        taskIsCreating: false
      }
    }

    case TaskTileActionTypes.CreateTask: {
      return {
        ...state,
        taskIsCreating: true
      }
    }

    case TaskTileActionTypes.LoadTasks: {
      return {
        ...state,
        listIsLoading: true,
        listLoadingError: false
      }
    }

    case TaskTileActionTypes.LoadTasksSuccess:{
      return {
        ...state,
        listIsLoading: false
      }
    }

    case TaskTileActionTypes.LoadTasksError: {
      return {
        ...state,
        listIsLoading: false,
        listLoadingError: true
      }
    }

    case TaskTileActionTypes.ShowTaskTileAdd: {
      return {
        ...state,
        taskTileAddVisible: true
      }
    }

    case TaskTileActionTypes.HideTaskTileAdd: {
      return {
        ...state,
        taskTileAddVisible: false
      }
    }

    default: {
      return state;
    }
  }
}

export const getTaskTileAddVisible = (state: State) => state.taskTileAddVisible;
export const getDefaultTask = (state: State) => state.defaultTask;
export const getListIsLoading = (state: State) => state.listIsLoading;
export const getTaskIsCreating = (state: State) => state.taskIsCreating;
export const getListLoadingError = (state: State) => state.listLoadingError;
