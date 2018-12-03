import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";

export interface State {
  showNotification: boolean,
  notificationType: 'danger' | 'success',
  notificationMessage: string
}

const now =  new Date();

function getMessage(type: TaskSearchActionTypes){
  switch(type){
    case TaskSearchActionTypes.CreateTaskSuccess: {
      return 'Your task has been created';
    }
    case TaskSearchActionTypes.ResolveTaskError:
    case TaskSearchActionTypes.UpdateTaskError: {
      return 'Error updating task';
    }
    case TaskSearchActionTypes.CreateTaskError: {
      return 'Error creating task';
    }
    case TaskSearchActionTypes.UpdateTaskSuccess: {
      return 'Your task has been updated';
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
  action: TaskSearchActions
): State {
  switch (action.type) {

    case TaskSearchActionTypes.CreateTaskSuccess:
    case TaskSearchActionTypes.UpdateTaskSuccess: {
      return {
        showNotification: true,
        notificationType: 'success',
        notificationMessage: getMessage(action.type)
      }
    }

    case TaskSearchActionTypes.ResolveTaskError:
    case TaskSearchActionTypes.CreateTaskError:
    case TaskSearchActionTypes.UpdateTaskError: {
      return {
        showNotification: true,
        notificationType: 'danger',
        notificationMessage: getMessage(action.type)
      }
    }


    case TaskSearchActionTypes.ClearNotification: {
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
