import { Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {LoginActionTypes, Logined} from '../actions/login.actions';
// import { LoginActions } from '../actions/login.actions';
import * as LoginActions from '../actions/login.actions';
import {select, Store} from '@ngrx/store';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private store: Store<any>
  ) { }

  @Effect() initLogin$ = this.actions$.pipe(


    switchMap((action: LoginActions.Init) => this.loginService.init().pipe(
      map(() => action.payload)
    )),

    switchMap(() => this.loginService.login().pipe(
      map((ok) => new LoginActions.Logined({value: ''}))
    ))

    // switchMap(({searchParams}: {searchParams: SearchParams}) => this.search.load(searchParams).pipe(
    //   map((ok: boolean) => new fromResultsActions.Loaded({})),
    //   catchError(error => of(new fromResultsActions.ReceiveError(error))),
    // )),

    // switchMap((action: LoginActionTypes.Init) => this.loginService.login().pipe(
    //   map(() => action)
    // )),

    // switchMap(() => this.loginService.login({}).pipe(
    //   map((ok) => {
    //     console.log('Effect loaded: ', ok);
    //   }),
    // ) )
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
