import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClearNotification, TaskTileActionTypes } from '../../common/actions/task-tile.actions';
import { delay, map } from "rxjs/operators";

@Injectable()
export class TaskTileNotificationEffects {

  constructor(private actions$: Actions) {
  }

  @Effect() hideNotification$ = this.actions$.pipe(
    ofType(
      TaskTileActionTypes.CreateTaskSuccess,
      TaskTileActionTypes.CreateTaskError,
      TaskTileActionTypes.ResolveTaskError
    ),
    delay(5000),
    map(() => new ClearNotification())
  );

}
