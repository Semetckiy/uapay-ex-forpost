import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserEntitiesEffects } from './user.effects';
import { Actions } from "@ngrx/effects";
import { cold, hot } from "jasmine-marbles";
import { USERS_MOCK } from "../../common/models/mocks";
import * as TaskTileActions from "../../common/actions/task-tile.actions";
import * as TaskSearchActions from "../../common/actions/task-search.actions";
import { UsersHttpService } from "../services/users-http.service";
import { LoadUsers, LoadUsersError, LoadUsersSuccess } from "../actions/user.actions";

describe('UserEntitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEntitiesEffects;
  let usersHttpService: UsersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: UsersHttpService, useValue: {
          getUsers: () => {}
        }},
        UserEntitiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(UserEntitiesEffects);
    usersHttpService = TestBed.get(UsersHttpService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadUsers$', () => {
    it('should request users and dispatch LoadUsersSuccess', () => {
      spyOn(usersHttpService, 'getUsers').and.returnValue(cold('-a|', {a: USERS_MOCK}));

      const expected = cold('--b', { b: new LoadUsersSuccess({users: USERS_MOCK})});
      actions$ = hot('-a', { a: new LoadUsers()});

      expect(effects.loadUsers$).toBeObservable(expected);
    });

    it('should dispatch LoadUsersError', () => {
      spyOn(usersHttpService, 'getUsers').and.returnValue(cold('-#'));

      const expected = cold('--b', { b: new LoadUsersError({e: 'error'})});
      actions$ = hot('-a', { a: new LoadUsers()});

      expect(effects.loadUsers$).toBeObservable(expected);
    });

  });

  describe('init$', () => {
    xit('should dispatch LoadUsers once when LoadTasks is dispatched', () => {

      const expected = cold('-b|', { b: new LoadUsers()});

      actions$ = hot('-a', { a: new TaskTileActions.LoadTasks(), b: new TaskSearchActions.LoadTasks()});

      expect(effects.init$).toBeObservable(expected);
    });

  });


});
