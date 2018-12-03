import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TaskTileActions, TaskTileActionTypes } from "../../common/actions/task-tile.actions";
import { Task } from "../../common/models/";
import { createSelector } from "@ngrx/store";

export interface State extends EntityState<Task> { }

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState();

export function reducer(
  state = initialState,
  action: TaskTileActions
): State {
  switch (action.type) {
    case TaskTileActionTypes.CreateTaskSuccess: {
      return adapter.addOne(action.payload.task, state);
    }

    case TaskTileActionTypes.LoadTasksSuccess: {
      return adapter.addAll(action.payload.tasks, state);
    }

    case TaskTileActionTypes.ResolveTaskSuccess: {
      return adapter.updateOne(action.payload.task, state);
    }

    case TaskTileActionTypes.ResolveTaskError: {
      const { originalTask } = action.payload;
      return adapter.updateOne({id: originalTask.id, changes:{...originalTask}}, state);
    }

    default: {
      return state;
    }
  }
}

const {
  selectAll
} = adapter.getSelectors();

export const getAllTodoTasks = createSelector(selectAll, (tasks: Task[]) => tasks
  .filter((t: Task) => !t.done));
