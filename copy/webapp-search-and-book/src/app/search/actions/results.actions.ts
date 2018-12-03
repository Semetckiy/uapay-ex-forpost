import {Action} from '@ngrx/store';
import {ResultsItem} from '../models/results-item.model';
import {Progress, Sorting, Recap} from '../reducers/results.reducer';
import {SearchParams} from '../models/search-params.model';

export enum ResultsActionTypes {
  Init = '[Search results] Init',
  Receive = '[Search results] Receive',
  ReceiveCount = '[Search results] Receive count',
  ReceiveTotalCount = '[Search results] Receive total count',
  ReceiveProgress = '[Search results] Receive progress',
  ReceiveError = '[Search results] Receive error',
  ClearError = '[Search results] Clear error',
  Loaded = '[Search results] Loaded',
  PageChange = '[Search results] Page change',
  SortingChange = '[Search results] Sorting change',
  IsEnableRecapPanel = '[Search results] Is enable recap panel',
}

export class Init implements Action {
  readonly type = ResultsActionTypes.Init;

  constructor(public payload: {searchParams: SearchParams}) {
  }
}

export class Receive implements Action {
  readonly type = ResultsActionTypes.Receive;

  constructor(public payload: ResultsItem[]) {
  }
}

export class ReceiveCount implements Action {
  readonly type = ResultsActionTypes.ReceiveCount;

  constructor(public payload: number) {}
}

export class ReceiveTotalCount implements Action {
  readonly type = ResultsActionTypes.ReceiveTotalCount;

  constructor(public payload: number) {}
}

export class ReceiveProgress implements Action {
  readonly type = ResultsActionTypes.ReceiveProgress;

  constructor(public payload: Progress) {}
}

export class ReceiveError implements Action {
  readonly type = ResultsActionTypes.ReceiveError;

  constructor(public payload: string) {}
}

export class ClearError implements Action {
  readonly type = ResultsActionTypes.ClearError;

  constructor() {}
}

export class Loaded implements Action {
  readonly type = ResultsActionTypes.Loaded;

  constructor(public payload: {}) {}
}

export class PageChange implements Action {
  readonly type = ResultsActionTypes.PageChange;

  constructor(public payload: { page: number }) {
  }
}

export class SortingChange implements Action {
  readonly type = ResultsActionTypes.SortingChange;

  constructor(public payload: { sorting: Sorting }) {}
}

export class IsEnableRecapPanel implements Action {
  readonly type = ResultsActionTypes.IsEnableRecapPanel;

  constructor(public payload: { recap: Recap }) {}
}

export type ResultsActions =
  Init
  | Receive
  | ReceiveCount
  | ReceiveTotalCount
  | ReceiveProgress
  | ReceiveError
  | ClearError
  | Loaded
  | PageChange
  | SortingChange
  | IsEnableRecapPanel
;
