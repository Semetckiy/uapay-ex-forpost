import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as rootReducers from '../../reducers';
import * as resultsActions from '../../actions/results.actions';
import {State as ResultsState} from '../../reducers/results.reducer';
import {State as BookState} from '../../reducers/book.reducer';
import * as bookActions from '../../actions/book.actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  resultState$: Observable<ResultsState>;
  bookState$: Observable<BookState>;

  constructor(private store: Store<any>) {
    this.resultState$ = store.pipe(select(rootReducers.getResultsState));
    this.bookState$ = store.pipe(select(rootReducers.getBookState));
  }

  ngOnInit() {}

  onPageChange(page: number) {
    this.store.dispatch(new resultsActions.PageChange({page}));
  }

  book({book: {elements, recommendationId, travelShopperTicket}, searchResult: searchResultItem}) {

    this.store.dispatch(
      new bookActions.SelectResultItem(
        {book: {elements, recommendationId, travelShopperTicket}, searchResult: searchResultItem}
      )
    );

  }

  performBookTripPlan(bookData) {
    this.store.dispatch(new bookActions.SubmitBookForm(bookData.form));
  }

  backToResults() {
    this.store.dispatch(new bookActions.BackToResults());
  }
}
