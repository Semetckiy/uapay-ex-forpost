import { initialState, reducer } from './task-search-count.reducer';
import { LoadCountSuccess, TaskSearchActionTypes } from "../../common/actions/task-search.actions";
import { COUNT_MOCK } from "../../common/models/mocks";

describe('TaskCount Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('LoadCountSuccess action', () => {
    it('should apply given Counts', () => {
      const action = new LoadCountSuccess({count: {...COUNT_MOCK, totalCount: 4}});

      const result = reducer(initialState, action);
      expect(result).toEqual({...COUNT_MOCK, totalCount: 4});
    });

  });

});
