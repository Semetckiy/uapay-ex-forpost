import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { TaskTileActions, TaskTileActionTypes } from "../../common/actions/task-tile.actions";

export interface State {
  id: number,
  expanded: boolean,
  editing: boolean,
}

export const initialState: State = {
  id: null,
  expanded: false,
  editing: false,
};

export function reducer(
  state = initialState,
  action: TaskSearchActions | TaskTileActions
): State {
  switch (action.type) {
    case TaskSearchActionTypes.ExpandTask: {
      const { id } = action.payload.task;
      return {
        id,
        expanded: (id === state.id ? !state.expanded : true),
        editing: false
      }
    }

    case TaskSearchActionTypes.EditTask: {
      const { id } = action.payload.task;
      return {
        id,
        expanded: true,
        editing: !state.editing
      }
    }
    case TaskSearchActionTypes.CancelEditTask:
    case TaskSearchActionTypes.UpdateTaskSuccess: {
      return {
        id: null,
        expanded: false,
        editing: false
      }
    }

    case TaskTileActionTypes.Select:
    case TaskSearchActionTypes.Select: {
      const { id } = action.payload.task;
      return {
        id,
        expanded: true,
        editing: false
      }
    }

    default: {
      return state;
    }
  }
}
