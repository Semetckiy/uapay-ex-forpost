import { Count } from "../../common/models";
import {LoadCountSuccess, TaskSearchActionTypes} from "../../common/actions/task-search.actions";

export interface State extends Count{}

export const initialState: State = {
  doneCount: 0,
  dueCount: 0,
  overdueCount: 0,
  totalCount: 0
};

export function reducer(
  state = initialState,
  action: LoadCountSuccess
): State {
  switch (action.type) {

    case TaskSearchActionTypes.LoadCountSuccess: {
      const {count} = action.payload;
      return {
        ...count
      };
    }

    default: {
      return state;
    }
  }
}
