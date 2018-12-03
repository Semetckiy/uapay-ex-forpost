import {Action} from '@ngrx/store';
import {FilterValue, ReceivedFilterValue} from '../models/filter.model';

export enum FiltersActionTypes {
  ReceiveOptions = '[Filters] Receive filter options',
  ValueChange = '[Filters] Filter value change',
  ValueApply = '[Filters] Filter value apply',
  Reset = '[Filters] Reset filter values',
}

export class ReceiveOptions implements Action {
  readonly type = FiltersActionTypes.ReceiveOptions;

  constructor(public payload: ReceivedFilterValue) {}
}

export class ValueChange implements Action {
  readonly type = FiltersActionTypes.ValueChange;

  constructor(public payload: {filterName: string, value: FilterValue}) {
  }
}

export class ValueApply implements Action {
  readonly type = FiltersActionTypes.ValueApply;

  constructor(public payload: {filterName: string, value: FilterValue}) {
  }
}

export class Reset implements Action {
  readonly type = FiltersActionTypes.Reset;

  constructor() {}
}

export type FiltersActions =
  ReceiveOptions
  | ValueChange
  | ValueApply
  | Reset
;
