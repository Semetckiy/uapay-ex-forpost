import {Action} from '@ngrx/store';
import {Step} from '../reducers/book.reducer';
import {ResultsItem} from '../models/results-item.model';

export enum BookActionTypes {
  UpdateStep = '[Book] Update step',
  SelectResultItem = '[Book] Select result item',
  ReceiveFarePricing = '[Book] Receive fare pricing',
  BackToResults = '[Book] Back to results',
  SubmitBookForm = '[Book] Submit book form',
  InitProgress = '[Book] Init progress',
  ReceiveBookTripPlan = '[Book] Receive book trip plan',
  ReceiveCommitPNR = '[Book] Receive commit PNR',
  RepeatTicketing = '[Book] Repeat ticketing',
  ReceiveRepeatTicketing = '[Book] Receive repeat ticketing'
}

export class UpdateStep implements Action {
  readonly type = BookActionTypes.UpdateStep;

  constructor(public payload: Step) {
  }
}

export class SelectResultItem implements Action {
  readonly type = BookActionTypes.SelectResultItem;

  constructor(public payload: {book: {elements, recommendationId, travelShopperTicket}, searchResult: ResultsItem}) {
  }
}

export class ReceiveFarePricing implements Action {
  readonly type = BookActionTypes.ReceiveFarePricing;

  constructor(public payload: any) {
  }
}

export class BackToResults implements Action {
  readonly type = BookActionTypes.BackToResults;

  constructor() {
  }
}

export class SubmitBookForm implements Action {
  readonly type = BookActionTypes.SubmitBookForm;

  constructor(public payload: {travellers, formOfPayment, segmentCount}) {
  }
}

export class InitProgress implements Action {
  readonly type = BookActionTypes.InitProgress;

  constructor(public payload: any) {
  }
}

export class ReceiveBookTripPlan implements Action {
  readonly type = BookActionTypes.ReceiveBookTripPlan;

  constructor(public payload: any) {
  }
}

export class ReceiveCommitPNR implements Action {
  readonly type = BookActionTypes.ReceiveCommitPNR;

  constructor(public payload: any) {
  }
}

export class ReceiveRepeatTicketing implements Action {
  readonly type = BookActionTypes.ReceiveRepeatTicketing;

  constructor(public payload: any) {
  }
}

export class RepeatTicketing implements Action {
  readonly type = BookActionTypes.RepeatTicketing;

  constructor(public payload: any) {
  }
}

export type BookActions = UpdateStep | SelectResultItem | ReceiveFarePricing | BackToResults | SubmitBookForm
  | InitProgress | ReceiveBookTripPlan | ReceiveCommitPNR | ReceiveRepeatTicketing | RepeatTicketing;

