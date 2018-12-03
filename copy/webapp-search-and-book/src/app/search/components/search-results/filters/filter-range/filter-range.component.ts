import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FilterRange} from '../../../../models/filter.model';
import {Store} from '@ngrx/store';
import {Options} from 'ng5-slider';
import {FilterService} from '../../../../services/filter/filter.service';
import {ValueChange} from '../../../../actions/filters.actions';

@Component({
  selector: 'app-filter-range',
  templateUrl: './filter-range.component.html',
  styleUrls: ['./filter-range.component.css']
})
export class FilterRangeComponent implements OnInit {
  @Input() filter: FilterRange;
  @Input() panelEventEmitter: EventEmitter<void>;

  from: number;
  to: number;
  options: Options;

  constructor(private store: Store<any>, private filterService: FilterService) {}

  ngOnInit() {
    this.from = this.filter.value.min;
    this.to = this.filter.value.max;

    this.options = {
      floor: this.filter.range.min,
      ceil: this.filter.range.max,
      step: this.filter.step,
      getPointerColor: (): string => {
        return '#005EB8';
      },
      getSelectionBarColor: (): string => {
        return '#005EB8';
      }
    };

    let translator;

    if (translator = this.filterService.getTranslatorForFilter(this.filter)) {
      this.options.translate = translator;
    }
  }

  onChange() {
    this.store.dispatch(new ValueChange({
      filterName: this.filter.name,
      value: {min: this.from, max: this.to},
    }));
  }
}
