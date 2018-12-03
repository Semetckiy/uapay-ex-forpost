import { initialState, reducer } from '../reducers/task-search-entities.reducer';
import {
  CreateTaskSuccess,
  LoadTasksSuccess, ResolveTask, ResolveTaskError, ResolveTaskSuccess,
  TaskSearchActionTypes,
  UpdateTaskSuccess
} from "../../common/actions/task-search.actions";
import { TASK_MOCK, TASKS_MOCK } from "../../common/models/mocks";

describe('TaskSearch entities reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskSearchActionTypes.CreateTaskSuccess', () => {
    it('should add the given task', () => {
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

  describe('TaskSearchActionTypes.LoadTasksSuccess', () => {
    it('should add the given tasks', () => {
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

  describe('TaskSearchActionTypes.UpdateTaskSuccess', () => {
    it('should update the given task', () => {
      const action = new UpdateTaskSuccess({task: {id: TASK_MOCK.id, changes: {...TASK_MOCK, title: 'unit-test'}}});
      const result = reducer(reducer(initialState, new CreateTaskSuccess({task: TASK_MOCK})), action);
      expect(result).toEqual({
        ids: [TASK_MOCK.id],
        entities: {
          [TASK_MOCK.id]: {...TASK_MOCK, title: 'unit-test'}
        }
      });
    });
  });

  describe('TaskSearchActionTypes.ResolveTaskSuccess', () => {
    it('should update the given task', () => {
      const action = new ResolveTaskSuccess({task: {id:  TASK_MOCK.id, changes: {done: !TASK_MOCK.done}}});
      const result = reducer(reducer(initialState, new CreateTaskSuccess({task: TASK_MOCK})), action);
      expect(result).toEqual({
        ids: [TASK_MOCK.id],
        entities: {
          [TASK_MOCK.id]: {...TASK_MOCK, done: !TASK_MOCK.done}
        }
      });
    });
  });

  describe('TaskSearchActionTypes.ResolveTaskError', () => {
    it('should restore the task', () => {
      const action = new ResolveTaskError({e: 'error', originalTask: TASK_MOCK});
      const result = reducer(reducer(reducer(reducer(initialState,
        new CreateTaskSuccess({task: TASK_MOCK})), action),
        new ResolveTask({task: {...TASK_MOCK}, checked: !TASK_MOCK.done})),
        action
      );
      expect(result).toEqual({
        ids: [TASK_MOCK.id],
        entities: {
          [TASK_MOCK.id]: {...TASK_MOCK}
        }
      });
    });
  });
});
