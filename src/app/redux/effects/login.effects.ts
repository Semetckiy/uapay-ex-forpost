import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginActionTypes } from '../actions/login.actions';
import * as LoginActions from '../actions/login.actions';
import { mergeMap, map } from 'rxjs/internal/operators';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
  ) {}

  @Effect() login$ = this.actions$.pipe(
    ofType(LoginActionTypes.Login),
    mergeMap(action => this.loginService.login(action['payload']).pipe(
      map(data => (new LoginActions.SetLoginResult(data)))
    ))
  );

}
