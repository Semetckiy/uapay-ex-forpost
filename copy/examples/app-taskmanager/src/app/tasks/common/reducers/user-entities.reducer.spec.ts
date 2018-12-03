import { initialState, reducer } from './user-entities.reducer';
import { LoadUsersSuccess, UserActionTypes } from "../actions/user.actions";

describe('User entities reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('UserActionTypes.LoadUsersSuccess', () => {
    it('should add the given user', () => {
      const action = new LoadUsersSuccess({users: [{sign: 'userSign', name: 'userName'}]});
      const result = reducer(initialState, action);
      expect(result).toEqual({
        ids: ['userSign'],
        entities: {
          ['userSign']: {sign: 'userSign', name: 'userName'}
        }
      });
    });
  });

});
