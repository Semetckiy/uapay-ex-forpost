import { initialState, reducer } from '../reducers/task-search-selected.reducer';
import {
  CancelEditTask,
  EditTask,
  ExpandTask,
  Select,
  TaskSearchActionTypes,
  UpdateTaskSuccess
} from "../../common/actions/task-search.actions";
import { TASK_MOCK } from "../../common/models/mocks";
import * as TaskTileActions from "../../common/actions/task-tile.actions";

describe('TaskSearch selected reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskSearchActionTypes.ExpandTask', () => {
    it('should expand and select given Task', () => {
      const action = new ExpandTask({task: TASK_MOCK});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: true,
        editing: false
      });
    });

    it('should toggle expanded', () => {
      const action = new ExpandTask({task: TASK_MOCK});
      const result = reducer(reducer(initialState, action), action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: false,
        editing: false
      });
    });

  });

  describe('TaskSearchActionTypes.EditTask', () => {
    it('should set editing to true', () => {
      const action = new EditTask({task: TASK_MOCK});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: true,
        editing: true
      });
    });

    it('should set editing to false', () => {
      const action = new EditTask({task: TASK_MOCK});
      const result = reducer(reducer(initialState, action), action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: true,
        editing: false
      });
    });
  });

  describe('TaskSearchActionTypes.CancelEditTask', () => {
    it('should unselect', () => {
      const action = new CancelEditTask({task: TASK_MOCK});
      const result = reducer(reducer(initialState, new EditTask({task: TASK_MOCK})), action);
      expect(result).toEqual({
        id: null,
        expanded: false,
        editing: false
      });
    });
  });

  describe('TaskSearchActionTypes.UpdateTaskSuccess', () => {
    it('should unselect', () => {
      const action = new UpdateTaskSuccess({task: {id: TASK_MOCK.id, changes: TASK_MOCK}});
      const result = reducer(reducer(initialState, new EditTask({task: TASK_MOCK})), action);
      expect(result).toEqual({
        id: null,
        expanded: false,
        editing: false
      });
    });
  });

  describe('TaskTileActionTypes.Select', () => {
    it('should select given task', () => {
      const action = new TaskTileActions.Select({task: TASK_MOCK});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: true,
        editing: false
      });
    });
  });

  describe('TaskSearchActionTypes.Select', () => {
    it('should select given task', () => {
      const action = new Select({task: TASK_MOCK});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        id: TASK_MOCK.id,
        expanded: true,
        editing: false
      });
    });
  });

});
