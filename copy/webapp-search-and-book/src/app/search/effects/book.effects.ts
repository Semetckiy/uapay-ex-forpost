import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import * as fromBookActions from '../actions/book.actions';
import {BookActionTypes} from '../actions/book.actions';
import {BookService} from '../services/book.service';
import {ResultsActionTypes} from '../actions/results.actions';
import {of} from 'rxjs';
import * as fromResultsActions from '../actions/results.actions';


@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {
  }
  //
  // @Effect() selectResultItem$ = this.actions$.pipe(
  //   ofType<fromBookActions.SelectResultItem>(BookActionTypes.SelectResultItem),
  //   map((action) => action.payload.book),
  //   switchMap(
  //   ({elements, recommendationId, travelShopperTicket}) => this.bookService.farePricing(
  //       elements, recommendationId, travelShopperTicket
  //     ).pipe(
  //       map(response => new fromBookActions.ReceiveFarePricing(response)),
  //       catchError(error => of(new fromResultsActions.ReceiveError(error))),
  //     )
  //   ),
  //
  // );


  @Effect() selectResultItem$ = this.actions$.pipe(
    ofType<fromBookActions.SelectResultItem>(BookActionTypes.SelectResultItem),
    map((action) => action.payload.book),
    switchMap(
      ({elements, recommendationId, travelShopperTicket}) => this.bookService.farePricing(
        elements, recommendationId, travelShopperTicket
      ).pipe(
        map(response => new fromBookActions.ReceiveFarePricing(response)),
        catchError(error => of(new fromResultsActions.ReceiveError(error))),
      )
    ),
  );

  @Effect() initSearch$ = this.actions$.pipe(
    ofType(ResultsActionTypes.Init),
    map(() => new fromBookActions.BackToResults())
  );

  @Effect() submitBookForm$ = this.actions$.pipe(
    ofType<fromBookActions.SubmitBookForm>(BookActionTypes.SubmitBookForm),
    switchMap(
      ({payload: {travellers, formOfPayment, segmentCount}}) => this.bookService.bookTripPlan(travellers, formOfPayment, segmentCount).pipe(
        map((data) => new fromBookActions.ReceiveBookTripPlan(data)),
        catchError(error => of(new fromResultsActions.ReceiveError(error))),
      )
    ),
  );


  @Effect() commitPnr$ = this.actions$.pipe(
    ofType<fromBookActions.ReceiveBookTripPlan>(BookActionTypes.ReceiveBookTripPlan),
    switchMap(
      () => this.bookService.commitPnr().pipe(
        map((data) => new fromBookActions.ReceiveCommitPNR(data)),
        catchError(error => of(new fromResultsActions.ReceiveError(error))),
      )
    ),
  );
}
