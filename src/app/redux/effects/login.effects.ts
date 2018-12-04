import { Injectable} from '@angular/core';

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

//
// import { Injectable} from '@angular/core';
//
// import {Actions, Effect, ofType} from '@ngrx/effects';
// import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
// import {combineLatest, of} from 'rxjs';
// import {LoginActionTypes} from '../actions/login.actions';
// import {LoginService} from '../services/login.service';
// import {map} from 'rxjs/internal/operators';
//
// @Injectable()
// export class LoginEffects {
//
//   constructor(private actions$: Actions, private loginService: LoginService) { }
//
//   // @Effect() initSearch$ = this.actions$.pipe(
//   //   ofType(LoginActionTypes.Init),
//   //
//   // );
//
//   @Effect() getTodos$ = this.actions$
//     .ofType(LoginActionTypes.Init)
//     .switchMap(action =>
//       this.loginService.login({})
//         .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos})));
//
// }
