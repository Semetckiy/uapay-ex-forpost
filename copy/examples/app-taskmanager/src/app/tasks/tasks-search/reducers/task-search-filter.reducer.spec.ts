import { initialState, reducer } from '../reducers/task-search-filter.reducer';
import { Filter, ResetFilter, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { TasksFilter } from "../../common/models";

describe('TaskSearch filter reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskSearchActionTypes.Filter', () => {
    it('should set the given filter', () => {
      const action = new Filter({filter: <TasksFilter> {filterTitle: 'unit-test'}});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        ...initialState,
        filterTitle: 'unit-test'
      });
    });

    it('should not set the given filter as it is not known to the reducer', () => {
      const k = 'unknown';
      const action = new Filter({filter: <TasksFilter> <unknown> {[k]: 'unit-test'}});
      const result = reducer(initialState, action);
      expect(result).toEqual(initialState);
    });

  });

  describe('TaskSearchActionTypes.ResetFilter', () => {
    it('should reset the filter to the initial state', () => {
      const action = new ResetFilter();
      const result = reducer({...initialState, filterTitle: 'unit-test'}, action);
      expect(result).not.toBe(initialState);
      expect(result).toEqual(initialState);
    });
  });
});
