import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { Go, RoutingActionTypes } from "../actions/routing.actions";

@Injectable()
export class RoutingEffects {

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RoutingActionTypes.Go),
    map((action: Go) => action.payload),
    tap(({ path, queryParams = {}, extras }) => {
      this.router.navigate(path, { ...extras, queryParams });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RoutingActionTypes.Back),
    tap(() => this.location.back())
  );

  constructor(
              private actions$: Actions,
              private router: Router,
              private location: Location) {
  }

}
