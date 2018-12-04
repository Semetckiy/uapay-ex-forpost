import { Injectable} from '@angular/core';
import { Actions } from '@ngrx/effects';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {LoginActionTypes} from '../actions/login.actions';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions) { }

  @Effect() initSearch$ = this.actions$.pipe(
    ofType(LoginActionTypes.Init),

  );

}
