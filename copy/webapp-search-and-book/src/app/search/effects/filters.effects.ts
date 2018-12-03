import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FiltersActionTypes} from '../actions/filters.actions';
import {debounceTime, map} from 'rxjs/operators';
import * as fromFiltersActions from '../actions/filters.actions';

@Injectable()
export class FiltersEffects {
  constructor(
    private actions$: Actions,
  ) {}

  @Effect() valueChange$ = this.actions$.pipe(
    ofType<fromFiltersActions.ValueChange>(FiltersActionTypes.ValueChange),

    debounceTime(400),

    map(valueChangeAction => new fromFiltersActions.ValueApply(valueChangeAction.payload)),
  );
}
