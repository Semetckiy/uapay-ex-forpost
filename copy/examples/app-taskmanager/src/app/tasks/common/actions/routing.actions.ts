import { Action } from "@ngrx/store";
import { NavigationExtras, Params } from "@angular/router";

export enum RoutingActionTypes {
  Go = '[Router] Go',
  Back = '[Router] Back',
  Forward = '[Router] Forward',
  Change = '[Router] Route Change'
}

export class Go implements Action {
  readonly type = RoutingActionTypes.Go;

  constructor(
    public payload: {
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = RoutingActionTypes.Back;
}

export class Forward implements Action {
  readonly type = RoutingActionTypes.Forward;
}

export class Change implements Action {
  readonly type = RoutingActionTypes.Change;
  constructor(public payload: { params: Params, path: string }) {}
}

export type RoutingActions = Go | Back | Forward | Change;
