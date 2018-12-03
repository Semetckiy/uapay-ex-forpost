import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TaskSearchActions, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { Task } from "../../common/models/";

export interface State extends EntityState<Task> { }

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState();

export function reducer(
  state = initialState,
  action: TaskSearchActions
): State {
  switch (action.type) {
    case TaskSearchActionTypes.CreateTaskSuccess: {
      return adapter.addOne(action.payload.task, state);
    }

    case TaskSearchActionTypes.LoadTasksSuccess: {
      return adapter.addAll(action.payload.tasks, state);
    }

    case TaskSearchActionTypes.UpdateTaskSuccess:
    case TaskSearchActionTypes.ResolveTaskSuccess: {
      return adapter.updateOne(action.payload.task, state);
    }

    case TaskSearchActionTypes.ResolveTaskError: {
      const { originalTask } = action.payload;
      return adapter.updateOne({id: originalTask.id, changes:{...originalTask}}, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectAll: getAllTasks
} = adapter.getSelectors();
