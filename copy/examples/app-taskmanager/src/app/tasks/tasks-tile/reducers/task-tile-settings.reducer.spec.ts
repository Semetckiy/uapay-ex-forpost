import {
  getDefaultTask,
  getListIsLoading,
  getTaskIsCreating,
  getTaskTileAddVisible,
  initialState,
  reducer
} from '../reducers/task-tile-settings.reducer';
import {
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  ShowTaskTileAdd,
  HideTaskTileAdd,
  TaskTileActionTypes
} from "../../common/actions/task-tile.actions";
import { TASK_MOCK, TASKS_MOCK } from "../../common/models/mocks";

describe('TaskTile settings reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskTileActionTypes.CreateTaskSuccess', () => {
    it('should create a copy of the defaultTask to reset the form', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result).not.toBe({
        ...initialState,
      });
      expect(result).toEqual({
        ...initialState,
      });
    });

    it('should hide taskTileAddVisible', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result.taskTileAddVisible).toEqual(false);
    });

    it('should set taskIsCreating to false', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});

      const result = reducer(reducer(initialState, new CreateTask({original: TASK_MOCK, update: TASK_MOCK})), action);

      expect(result.taskIsCreating).toEqual(false);
    });
  });

  describe('TaskTileActionTypes.CreateTaskError', () => {
    it('should set taskIsCreating to false', () => {
      const action = new CreateTaskError({e: 'error'});

      const result = reducer(reducer(initialState, new CreateTask({original: TASK_MOCK, update: TASK_MOCK})), action);

      expect(result.taskIsCreating).toEqual(false);
    });
  });

  describe('TaskTileActionTypes.CreateTask', () => {
    it('should set taskTileAddVisible tot true', () => {
      const action = new CreateTask({original: TASK_MOCK, update: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result.taskIsCreating).toEqual(true);
    });
  });

  describe('TaskTileActionTypes.LoadTasks', () => {
    it('should set taskTileAddVisible to true', () => {
      const action = new LoadTasks();

      const result = reducer(initialState, action);

      expect(result.listIsLoading).toEqual(true);
    });

    it('should set listLoadingError to false', () => {
      const action = new LoadTasks();

      const result = reducer(initialState, action);

      expect(result.listLoadingError).toEqual(false);
    });
  });

  describe('TaskTileActionTypes.LoadTasksSuccess', () => {
    it('should set taskTileAddVisible to true', () => {
      const action = new LoadTasksSuccess({tasks: TASKS_MOCK});

      const result = reducer(reducer(initialState, new LoadTasks()), action);

      expect(result.listIsLoading).toEqual(false);
    });
  });

  describe('TaskTileActionTypes.LoadTasksError', () => {
    it('should set taskTileAddVisible to true', () => {
      const action = new LoadTasksError({e: 'error'});

      const result = reducer(reducer(initialState, new LoadTasks()), action);

      expect(result.listIsLoading).toEqual(false);
    });

    it('should set listLoadingError to true', () => {
      const action = new LoadTasksError({e: 'error'});

      const result = reducer(reducer(initialState, new LoadTasks()), action);

      expect(result.listLoadingError).toEqual(true);
    });
  });

  describe('TaskTileActionTypes.ShowTaskTileAdd', () => {
    it('should set taskTileAddVisible to false', () => {
      const action = new ShowTaskTileAdd();

      const result = reducer(initialState, action);

      expect(result.taskTileAddVisible).toEqual(true);
    });
  });

  describe('TaskTileActionTypes.HideTaskTileAdd', () => {
    it('should set taskTileAddVisible to false', () => {
      const action = new HideTaskTileAdd();

      const result = reducer(reducer(initialState, new ShowTaskTileAdd()), action);

      expect(result.taskTileAddVisible).toEqual(false);
    });
  });

});

describe('TaskTile settings selectors', () => {

  describe('getTaskTileAddVisible', () => {
    it('should retrieve taskTileAddVisible', () => {

      expect(getTaskTileAddVisible(initialState)).toBe(initialState.taskTileAddVisible);
    });
  });

  describe('getDefaultTask', () => {
    it('should get the defaultTask', () => {

      expect(getDefaultTask(initialState)).toBe(initialState.defaultTask);
    });
  });

  describe('getListIsLoading', () => {
    it('should get listIsLoading', () => {
      expect(getListIsLoading(initialState)).toBe(initialState.listIsLoading);
    });
  });

  describe('getTaskIsCreating', () => {
    it('should get taskIsCreating', () => {
      expect(getTaskIsCreating(initialState)).toBe(initialState.taskIsCreating);
    });
  });

});
