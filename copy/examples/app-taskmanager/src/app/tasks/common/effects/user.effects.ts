import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from "rxjs/operators";
import { UsersHttpService } from "../services/users-http.service";
import { LoadUsers, LoadUsersError, LoadUsersSuccess, UserActionTypes } from "../actions/user.actions";
import { User } from "../models";
import { Observable, of } from "rxjs";
import { TaskTileActionTypes } from "../actions/task-tile.actions";
import { TaskSearchActionTypes } from "../actions/task-search.actions";

@Injectable()
export class UserEntitiesEffects {
  constructor(
    private actions$: Actions,
    private http: UsersHttpService) {
  }

  @Effect() loadUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap(() => {
      return this.http.getUsers().pipe(
        map((users: User[]) => new LoadUsersSuccess({users})),
        catchError((e) => of(new LoadUsersError({e})))
      );
    })
  );

  //Needs to be registered after loadUsers$
  @Effect() init$: Observable<LoadUsers> = this.actions$.pipe(
    ofType(TaskTileActionTypes.LoadTasks, TaskSearchActionTypes.LoadTasks),
    take(1),
    map(() => new LoadUsers())
  );

}
