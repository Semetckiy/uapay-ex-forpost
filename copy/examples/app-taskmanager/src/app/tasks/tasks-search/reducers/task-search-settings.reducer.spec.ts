import {
  getDefaultTask,
  getListIsLoading,
  getListLoadingError,
  getShowAddTask,
  getShowDoneTasks,
  getShowFilter,
  getTaskIsCreating,
  getTaskIsUpdating,
  initialState,
  reducer
} from '../reducers/task-search-settings.reducer';
import {
  CancelAddTask,
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  ShowAddTask,
  TaskSearchActionTypes,
  ToggleShowDoneTasksFilter,
  ToggleShowFilter,
  UpdateTask,
  UpdateTaskError,
  UpdateTaskSuccess
} from "../../common/actions/task-search.actions";
import { TASK_MOCK, TASKS_MOCK } from "../../common/models/mocks";

describe('TaskSearch settings reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskSearchActionTypes.CreateTask', () => {
    it('should set taskIsCreating to true', () => {
      const action = new CreateTask({original: TASK_MOCK, update: TASK_MOCK});
      const result = reducer(reducer(initialState, action), action);
      expect(result.taskIsCreating).toEqual(true);
    });

  });

  describe('TaskSearchActionTypes.CreateTaskError', () => {
    it('should set taskIsCreating to false', () => {
      const action = new CreateTaskError({e: 'error'});
      const result = reducer(reducer(initialState, new CreateTask({original: TASK_MOCK, update: TASK_MOCK})), action);
      expect(result.taskIsCreating).toEqual(false);
    });

  });

  describe('TaskSearchActionTypes.CreateTaskSuccess', () => {
    it('should set showAddTask to false', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});
      const result = reducer(reducer(initialState, action), action);
      expect(result.showAddTask).toEqual(false);
    });

    it('should refresh defaultTask to clear add task form', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});
      const result = reducer(initialState, action);
      expect(result.defaultTask).toEqual(initialState.defaultTask);
      expect(result.defaultTask).not.toBe(initialState.defaultTask);
    });

    it('should set taskIsCreating to false', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});
      const result = reducer(reducer(initialState, new CreateTask({original: TASK_MOCK, update: TASK_MOCK})), action);
      expect(result.taskIsCreating).toEqual(false);
    });

  });

  describe('TaskSearchActionTypes.CancelAddTask', () => {
    it('should set showAddTask to false', () => {
      const action = new CancelAddTask();
      const result = reducer(initialState, action);
      expect(result.showAddTask).toEqual(false);
    });
  });

  describe('TaskSearchActionTypes.ToggleShowDoneTasksFilter', () => {
    it('should set showDoneTasks to true', () => {
      const action = new ToggleShowDoneTasksFilter();
      const result = reducer(initialState, action);
      expect(result.showDoneTasks).toEqual(true);
    });

    it('should set showDoneTasks to false', () => {
      const action = new ToggleShowDoneTasksFilter();
      const result = reducer(reducer(initialState, action), action);
      expect(result.showDoneTasks).toEqual(false);
    });
  });

  describe('TaskSearchActionTypes.ToggleShowFilter', () => {
    it('should set showFilter to true', () => {
      const action = new ToggleShowFilter();
      const result = reducer(initialState, action);
      expect(result.showFilter).toEqual(true);
    });

    it('should set showFilter to false', () => {
      const action = new ToggleShowFilter();
      const result = reducer(reducer(initialState, action), action);
      expect(result.showFilter).toEqual(false);
    });
  });

  describe('TaskSearchActionTypes.ShowAddTask', () => {
    it('should set showFilter to true', () => {
      const action = new ShowAddTask();
      const result = reducer(reducer(initialState, action), action);
      expect(result.showAddTask).toEqual(true);
    });

  });

  describe('TaskSearchActionTypes.LoadTasks', () => {
    it('should set listIsLoading to true', () => {
      const action = new LoadTasks();
      const result = reducer(initialState, action);
      expect(result.listIsLoading).toEqual(true);
    });

    it('should set listLoadingError to false', () => {
      const action = new LoadTasks();
      const result = reducer(reducer(initialState, new LoadTasksError({e: 'error'})), action);
      expect(result.listLoadingError).toEqual(false);
    });

  });

  describe('TaskSearchActionTypes.LoadTasksSuccess', () => {
    it('should set listIsLoading to false', () => {
      const action = new LoadTasksSuccess({tasks: TASKS_MOCK});
      const result = reducer(reducer(initialState, new LoadTasks()), action);
      expect(result.listIsLoading).toEqual(false);
    });

  });

  describe('TaskSearchActionTypes.LoadTasksError', () => {
    it('should set listIsLoading to false', () => {
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

  describe('TaskSearchActionTypes.UpdateTask', () => {
    it('should set taskIsUpdating to true', () => {
      const action = new UpdateTask({update: TASK_MOCK, original: TASK_MOCK});
      const result = reducer(reducer(initialState, new LoadTasks()), action);
      expect(result.taskIsUpdating).toEqual(true);
    });

  });
  describe('TaskSearchActionTypes.UpdateTaskSuccess', () => {
    it('should set taskIsUpdating to false', () => {
      const action = new UpdateTaskSuccess({task: {id: TASK_MOCK.id, changes: TASK_MOCK}});
      const result = reducer(reducer(initialState, new UpdateTask({update: TASK_MOCK, original: TASK_MOCK})), action);
      expect(result.taskIsUpdating).toEqual(false);
    });

  });

  describe('TaskSearchActionTypes.UpdateTaskError', () => {
    it('should set taskIsUpdating to false', () => {
      const action = new UpdateTaskError({e: 'error'});
      const result = reducer(reducer(initialState, new UpdateTask({update: TASK_MOCK, original: TASK_MOCK})), action);
      expect(result.taskIsUpdating).toEqual(false);
    });

  });


});

describe('TaskSearch settings selectors', () => {

  describe('getDefaultTask', () => {
    it('should retrieve defaultTask', () => {
      expect(getDefaultTask(initialState)).toBe(initialState.defaultTask);
    });
  });

  describe('getShowDoneTasks', () => {
    it('should get showDoneTasks', () => {
      expect(getShowDoneTasks(initialState)).toBe(initialState.showDoneTasks);
    });
  });

  describe('getShowAddTask', () => {
    it('should get showAddTask', () => {
      expect(getShowAddTask(initialState)).toBe(initialState.showAddTask);
    });
  });

  describe('getShowFilter', () => {
    it('should get showFilter', () => {
      expect(getShowFilter(initialState)).toBe(initialState.showFilter);
    });
  });

  describe('getListIsLoading', () => {
    it('should get listIsLoading', () => {
      expect(getListIsLoading(initialState)).toBe(initialState.listIsLoading);
    });
  });

  describe('getTaskIsUpdating', () => {
    it('should get listIsLoading', () => {
      expect(getTaskIsUpdating(initialState)).toBe(initialState.taskIsUpdating);
    });
  });

  describe('getTaskIsCreating', () => {
    it('should get listIsLoading', () => {
      expect(getTaskIsCreating(initialState)).toBe(initialState.taskIsCreating);
    });
  });

  describe('getListLoadingError', () => {
    it('should get listIsLoading', () => {
      expect(getListLoadingError(initialState)).toBe(initialState.listLoadingError);
    });
  });

});
