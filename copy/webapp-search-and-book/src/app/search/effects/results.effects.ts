import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {SearchService} from '../services/search.service';
import {select, Store} from '@ngrx/store';
import {getFiltersState, getResultsState} from '../reducers';
import * as fromResultsActions from '../actions/results.actions';
import * as fromFiltersActions from '../actions/filters.actions';
import {SearchParams} from '../models/search-params.model';
import {FiltersActionTypes} from '../actions/filters.actions';
import {ResultsActionTypes} from '../actions/results.actions';

@Injectable()
export class ResultsEffects {
  constructor(
    private actions$: Actions,
    private search: SearchService,
    private store: Store<any>) {
  }

  @Effect() initSearch$ = this.actions$.pipe(
    ofType(ResultsActionTypes.Init),

    switchMap((action: fromResultsActions.Init) => this.search.init().pipe(
      map(() => action.payload)
    )),

    switchMap(({searchParams}: {searchParams: SearchParams}) => this.search.load(searchParams).pipe(
      map((ok: boolean) => new fromResultsActions.Loaded({})),
      catchError(error => of(new fromResultsActions.ReceiveError(error))),
    )),
  );

  @Effect() loadSearch$ = this.actions$.pipe(
    ofType(ResultsActionTypes.Loaded),

    withLatestFrom(this.store.pipe(select(getResultsState))),

    switchMap(([action, state]) =>
      combineLatest(
        this.search.getResults(1, state.pages.limit, {}, state.sorting),
        this.search.getTotal(),
        this.search.getProgress(),
        this.search.getFiltersOptions(this.search.results, this.search.dictionaries)
      )
      .pipe(
        switchMap(([results, total, progress, filterOptions]) => [
          new fromResultsActions.Receive(results),
          new fromResultsActions.ReceiveTotalCount(total),
          new fromResultsActions.ReceiveCount(total),
          new fromResultsActions.ReceiveProgress(progress),
          new fromFiltersActions.ReceiveOptions(filterOptions),
          new fromResultsActions.IsEnableRecapPanel({recap: {enabled: true}})
        ])
      )
    ),
  );

  @Effect() changeDisplay$ = this.actions$.pipe(
    ofType(
      ResultsActionTypes.SortingChange,
      ResultsActionTypes.PageChange,
      FiltersActionTypes.ValueApply,
      FiltersActionTypes.Reset,
    ),

    withLatestFrom(
      this.store.pipe(select(getResultsState)),
      this.store.pipe(select(getFiltersState)),
    ),

    switchMap(([action, state, filters]) =>
      combineLatest(
        this.search.getResults(state.pages.current, state.pages.limit, filters, state.sorting),
        this.search.getTotal(),
      )
      .pipe(
        switchMap(([results, total]) => [
          new fromResultsActions.Receive(results),
          new fromResultsActions.ReceiveCount(total),
        ])
      )
    ),
  );
}
