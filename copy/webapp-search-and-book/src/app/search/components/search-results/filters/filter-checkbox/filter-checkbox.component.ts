import {Component, Input, OnInit} from '@angular/core';
import {FilterCheckbox} from '../../../../models/filter.model';
import {Store} from '@ngrx/store';
import {ValueChange} from '../../../../actions/filters.actions';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit {
  @Input() filter: FilterCheckbox;

  value: string[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.value = <string[]>this.filter.value;
  }

  selected(name: string): boolean {
    return this.value.indexOf(name) >= 0;
  }

  onChange(input: HTMLInputElement) {
    if (input.checked) {
      this.value.push(input.value);
    } else {
      this.value.splice(this.value.indexOf(input.value), 1);
    }

    this.store.dispatch(new ValueChange({
      filterName: this.filter.name,
      value: this.value,
    }));
  }
}
