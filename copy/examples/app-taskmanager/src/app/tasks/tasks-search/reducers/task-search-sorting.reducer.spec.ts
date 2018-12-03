import { initialState, reducer } from '../reducers/task-search-sorting.reducer';
import { Sort } from "../../common/actions/task-search.actions";

describe('TaskSearch sorting reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('TaskSearchActionTypes.Sort', () => {
    it('should set the given sorting', () => {
      const action = new Sort({sorting: {sortColumn: 'test', sortDescending: true}});

      const result = reducer(initialState, action);

      expect(result).toEqual({sortColumn: 'test', sortDescending: true});
    });
  });

});
