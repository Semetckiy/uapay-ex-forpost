import { TaskTileActions, TaskTileActionTypes } from "../../common/actions/task-tile.actions";

export interface State {
  showNotification: boolean,
  notificationType: 'text-danger' | 'text-success',
  notificationMessage: string
}

const now =  new Date();

function getMessage(type: TaskTileActionTypes){
  switch(type){
    case TaskTileActionTypes.CreateTaskSuccess: {
      return 'Your task has been created';
    }

    case TaskTileActionTypes.CreateTaskError: {
      return 'Error creating task';
    }

    case TaskTileActionTypes.ResolveTaskError: {
      return 'Error updating task';
    }

    default: {
      return '';
    }
  }
}

export const initialState: State = {
  showNotification: false,
  notificationType: null,
  notificationMessage: null,
};

export function reducer(
  state = initialState,
  action: TaskTileActions
): State {
  switch (action.type) {

    case TaskTileActionTypes.CreateTaskSuccess: {
      return {
        showNotification: true,
        notificationType: 'text-success',
        notificationMessage: getMessage(action.type)
      }
    }

    case TaskTileActionTypes.ResolveTaskError:
    case TaskTileActionTypes.CreateTaskError: {
      return {
        showNotification: true,
        notificationType: 'text-danger',
        notificationMessage: getMessage(action.type)
      }
    }

    case TaskTileActionTypes.ClearNotification: {
      return {
        showNotification: false,
        notificationType: null,
        notificationMessage: null
      }
    }

    default: {
      return state;
    }
  }
}
