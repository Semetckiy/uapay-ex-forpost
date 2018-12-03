import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";

export interface State {
  sortDescending: boolean,
  sortColumn: string
}

export const initialState: State = {
  sortColumn: null,
  sortDescending: null
};

export function reducer(
  state = initialState,
  action: TaskSearchActions
): State {
  switch (action.type) {

    case TaskSearchActionTypes.Sort: {
      const { sortColumn, sortDescending } = action.payload.sorting;

      return {
        sortColumn,
        sortDescending
      }
    }

    default: {
      return state;
    }
  }
}
