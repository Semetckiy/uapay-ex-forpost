import { initialState, reducer } from '../reducers/task-search-notification.reducer';
import {
  ClearNotification,
  CreateTaskError,
  CreateTaskSuccess, ResolveTaskError,
  UpdateTaskError,
  UpdateTaskSuccess,
} from "../../common/actions/task-search.actions";
import { TASK_MOCK } from "../../common/models/mocks";

describe('TaskSearch notification reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('TaskSearchActionTypes.ClearNotification', () => {
    it('should show success message', () => {
      const action = new ClearNotification();

      const result = reducer(reducer(initialState, new CreateTaskSuccess({task: TASK_MOCK})), action);

      expect(result).toEqual({
        showNotification: false,
        notificationType: null,
        notificationMessage: null
      });
    });

  });

  describe('TaskSearchActionTypes.ResolveTaskError', () => {
    it('should show an error message', () => {
      const action = new ResolveTaskError({e: 'error', originalTask: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'danger',
        notificationMessage: 'Error updating task'
      });
    });

  });


  describe('TaskSearchActionTypes.CreateTaskSuccess', () => {
    it('should show success message', () => {
      const action = new CreateTaskSuccess({task: TASK_MOCK});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'success',
        notificationMessage: 'Your task has been created'
      });
    });

  });

  describe('TaskSearchActionTypes.UpdateTaskSuccess', () => {
    it('should show success message', () => {
      const action = new UpdateTaskSuccess({task: {id: TASK_MOCK.id, changes: { ...TASK_MOCK }}});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'success',
        notificationMessage: 'Your task has been updated'
      });
    });

  });

  describe('TaskSearchActionTypes.UpdateTaskError', () => {
    it('should show error message', () => {
      const action = new UpdateTaskError({e: 'error'});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'danger',
        notificationMessage: 'Error updating task'
      });
    });

  });

  describe('TaskSearchActionTypes.CreateTaskError', () => {
    it('should show error message', () => {
      const action = new CreateTaskError({e: 'error'});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'danger',
        notificationMessage: 'Error creating task'
      });
    });

  });

});
