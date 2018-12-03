import { initialState, reducer } from './task-tile-notification.reducer';
import { ResolveTaskError, ClearNotification, CreateTaskError, CreateTaskSuccess } from "../../common/actions/task-tile.actions";
import { TASK_MOCK } from "../../common/models/mocks";

describe('TaskTile notification reducer', () => {

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
        notificationType: 'text-danger',
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
        notificationType: 'text-success',
        notificationMessage: 'Your task has been created'
      });
    });

  });

  describe('TaskSearchActionTypes.CreateTaskError', () => {
    it('should show error message', () => {
      const action = new CreateTaskError({e: 'error'});

      const result = reducer(initialState, action);

      expect(result).toEqual({
        showNotification: true,
        notificationType: 'text-danger',
        notificationMessage: 'Error creating task'
      });
    });

  });

});
