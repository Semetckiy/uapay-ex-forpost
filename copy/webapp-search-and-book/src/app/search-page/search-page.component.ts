import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Init, IsEnableRecapPanel } from '../search/actions/results.actions'
import * as rootReducers from '../search/reducers';
import { Observable } from 'rxjs/index';
import { State } from '../search/reducers';
// import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  resultState$: Observable<State>;

  constructor(
    private store: Store<any>,
    // private location: PlatformLocation
  ) {
    this.resultState$ = this.store.pipe(select(rootReducers.getResultsState));
    // this.location.onPopState(() => {
    //   this.store.dispatch(new IsEnableRecapPanel({recap: {enabled:false}}));
    // });
  }

  search(data) {
    this.store.dispatch(new Init({searchParams: data}));
  }

  ngOnInit() {}

}
