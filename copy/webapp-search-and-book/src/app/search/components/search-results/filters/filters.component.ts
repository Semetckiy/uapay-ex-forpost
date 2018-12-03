import {Component, EventEmitter, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Filter, FilterSet, FilterType} from '../../../models/filter.model';
import {select, Store} from '@ngrx/store';
import {KeyValue} from '@angular/common';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {Reset} from '../../../actions/filters.actions';
import {getFiltersState} from '../../../reducers';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filters$: Observable<FilterSet>;
  FilterType = FilterType;
  panelEventEmitter = new EventEmitter<void>();

  constructor(private store: Store<FilterSet>) {
    this.filters$ = store.pipe(select(getFiltersState));
  }

  ngOnInit() {}

  onReset() {
    this.store.dispatch(new Reset());
  }

  comparator(a: KeyValue<string, Filter>, b: KeyValue<string, Filter>): number {
    return a.value.order < b.value.order ? -1 : 1;
  }

  onPanelChange(event: NgbPanelChangeEvent) {
    if (event.nextState) {
      // NgbAccordion emits change event BEFORE changing panel display
      setTimeout(() => this.panelEventEmitter.emit(), 0);
    }
  }
}
