import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromForm from './form.reducer';
import * as fromResults from './results.reducer';
import * as fromFilters from './filters.reducer';
import * as fromBook from './book.reducer';
import {FilterSet} from '../models/filter.model';

export interface State {
  form: fromForm.State;
  results: fromResults.State;
  filters: FilterSet;
  book: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
  form: fromForm.reducer,
  results: fromResults.reducer,
  filters: fromFilters.reducer,
  book: fromBook.reducer,
};

const searchResultsState = state => state.search.results;
const bookState = state => state.search.book;
const filtersState = state => state.search.filters;
const searchFormState = state => state.search.form;

export const getResultsState = createSelector(searchResultsState);
export const getFiltersState = createSelector(filtersState);
export const getFormState = createSelector(searchFormState);
export const getBookState = createSelector(bookState);
