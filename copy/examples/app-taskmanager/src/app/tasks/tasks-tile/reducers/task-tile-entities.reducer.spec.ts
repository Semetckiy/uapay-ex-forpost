import { getAllTodoTasks, initialState, reducer } from '../reducers/task-tile-entities.reducer';
import {
  CreateTaskSuccess,
  LoadTasksSuccess, ResolveTask, ResolveTaskError,
  ResolveTaskSuccess,
  TaskTileActionTypes
} from "../../common/actions/task-tile.actions";
import { TASK_MOCK, TASKS_MOCK } from "../../common/models/mocks";

describe('TaskTile entities reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskTileActionTypes.CreateTaskSuccess', () => {
    it('should add a Task', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ids: [TASK_MOCK.id],
        entities: {
          [TASK_MOCK.id]: TASK_MOCK
        }
      });
    });
  });

  describe('TaskTileActionTypes.LoadTasksSuccess', () => {
    it('should add tasks', () => {
      const action = new LoadTasksSuccess({tasks: TASKS_MOCK});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ids: [TASKS_MOCK[0].id, TASKS_MOCK[1].id],
        entities: {
          [TASKS_MOCK[0].id]: TASKS_MOCK[0],
          [TASKS_MOCK[1].id]: TASKS_MOCK[1]
        }
      });
    });
  });

  describe('TaskTileActionTypes.ResolveTaskSuccess', () => {
    it('should update a task', () => {
      const load = new LoadTasksSuccess({tasks: TASKS_MOCK});
      const update = new ResolveTaskSuccess({task: {id: TASKS_MOCK[0].id, changes: {done: !TASKS_MOCK[0].done}}});

      const afterLoad = reducer(initialState, load);
      const result = reducer(afterLoad, update);

      expect(result).toEqual({
        ids: [TASKS_MOCK[0].id, TASKS_MOCK[1].id],
        entities: {
          [TASKS_MOCK[0].id]: {
            ...TASKS_MOCK[0],
            done: !TASKS_MOCK[0].done
          },
          [TASKS_MOCK[1].id]: TASKS_MOCK[1]
        }
      });
    });
  });


  describe('TaskTileActionTypes.ResolveTaskError', () => {
    it('should restore the task', () => {
      const load = new LoadTasksSuccess({tasks: TASKS_MOCK});
      const update = new ResolveTask({task: TASKS_MOCK[0], checked: !TASKS_MOCK[0].done});
      const error = new ResolveTaskError({e: 'error', originalTask: TASKS_MOCK[0]});

      const afterLoad = reducer(initialState, load);
      const afterUpdate = reducer(afterLoad, update);
      const result = reducer(afterUpdate, error);

      expect(result).toEqual({
        ids: [TASKS_MOCK[0].id, TASKS_MOCK[1].id],
        entities: {
          [TASKS_MOCK[0].id]: TASKS_MOCK[0],
          [TASKS_MOCK[1].id]: TASKS_MOCK[1]
        }
      });
    });
  });



});

describe('TaskTile Entities reducer', () => {

  describe('getAllTodoTasks', () => {
    it('should retrieve all tasks not done', () => {

      const tasks = [
        ...TASKS_MOCK,
      ];
      tasks[1] = {...tasks[1], done: true};
      expect(getAllTodoTasks.projector(tasks)).toEqual([tasks[0]])
    });
  });

});
