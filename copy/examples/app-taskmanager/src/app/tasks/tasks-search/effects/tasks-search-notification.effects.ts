import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClearNotification, TaskSearchActionTypes } from '../../common/actions/task-search.actions';
import { delay, map } from "rxjs/operators";

@Injectable()
export class TasksSearchNotificationEffects {

  constructor(private actions$: Actions) {
  }

  @Effect() hideNotification$ = this.actions$.pipe(
    ofType(
      TaskSearchActionTypes.CreateTaskSuccess,
      TaskSearchActionTypes.UpdateTaskSuccess,
      TaskSearchActionTypes.CreateTaskError,
      TaskSearchActionTypes.UpdateTaskError,
      TaskSearchActionTypes.ResolveTaskError
    ),
    delay(5000),
    map(() => new ClearNotification())
  );

}
