import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { TasksFilter } from "../../common/models/";

const now =  new Date();

export interface State extends TasksFilter{}

export const initialState: State = {
  filterAssigneeSign: '',
  filterBookingRef: '',
  filterFromDueDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
  filterToDueDate: null,
  filterPriority: '',
  filterTitle: ''
};

export function reducer(
  state = initialState,
  action: TaskSearchActions
): State {
  switch (action.type) {

    case TaskSearchActionTypes.Filter: {
      const {filter} = action.payload;

      return <TasksFilter> Object.keys(initialState).reduce((acc, curr) => {
        if(filter.hasOwnProperty(curr)){
          acc[curr] = filter[curr];
        } else {
          acc[curr] = initialState[curr];
        }
        return acc;
      }, {});

    }

    case TaskSearchActionTypes.ResetFilter: {
      return {
        ...initialState
      };
    }

    default: {
      return state;
    }
  }
}
