import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {SearchParams, SearchType} from '../../models/search-params.model';
import {NgbDate, NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {PTC} from './ptc/pnr.model';
import {PTCDictionary} from './ptc/ptc-dictionary';
import {AirportAutocompletionService} from './bounds/airport-autocompletion/airport-autocompletion.service';
import {SuggestionType} from './bounds/airport-autocompletion/airport-suggestion.model';
import {getFormState, getResultsState, State} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs/index';
import * as rootReducers from '../../reducers';
import { CustomValidators } from './custom-validators';
import * as resultsActions from '../../actions/results.actions';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  @Output() performSearch = new EventEmitter<SearchParams>();
  formGroup: FormGroup;
  subscription: Subscription;
  suggestionType = SuggestionType;

  requestObj;
  ptcsGroups = [];
  minDate;
  minReturnDate;
  private formSubmitAttempt: boolean;

  hoveredDate: NgbDate;

  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    public airportAutocompletionService: AirportAutocompletionService
  ) {
    this.requestObj = '';
    this.ptcsGroups = [];
    let date = new Date();
    this.minDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
  }

  cabins = [
    {value: 'All', label: 'All'},
    {value: 'First', label: 'First'},
    {value: 'Business', label: 'Business'},
    {value: 'Economy Premium', label: 'Economy Premium'},
    {value: 'Economy', label: 'Economy'},
  ];

  ngbDateToString (date:NgbDateStruct) {
    return  date.year +'/'+ date.month +'/'+ date.day+' ' + '00:00:00'
  }

  private createFormGroup() {
    this.formGroup = this.formBuilder.group({
      searchType: ['oneWayTrip'],
      nonStop: [false],
      inboundTo: [null, [Validators.required, CustomValidators.isObject]],
      outboundFrom: [null, [Validators.required, CustomValidators.isObject]],
      date: [this.calendar.getToday(), [Validators.required]],
      endDate: [this.calendar.getNext(this.calendar.getToday(), 'd', 14), [Validators.required]],
      ptcs: [[{ code: PTCDictionary.ADT.code, infantAllowed: true, category: PTCDictionary.ADT.category }], []],
      airline: [null, []],
      cabin: [null, []]
    });
  }

  submit() {

    this.formSubmitAttempt = true;

    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    this.requestObj = this.formGroup.getRawValue();
    // TODO: add zeros to dates
    this.requestObj['date'] = this.ngbDateToString(this.requestObj.date);
    this.requestObj['endDate'] = this.ngbDateToString(this.requestObj.endDate);

    if (this.formGroup.valid) {
      this.performSearch.emit(this.requestObj);
      this.store.dispatch(new resultsActions.IsEnableRecapPanel({recap: {enabled:true}}));
    }

  }

  isFieldValid(field: string) {
    return (!this.formGroup.get(field).valid && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'error-border': (this.isFieldValid(field) && this.formGroup.get(field).touched)
    };
  }

  ngOnInit() {

    this.createFormGroup();

    this.subscription = this.store.pipe(
      select(getFormState),
    ).subscribe(formState => {

      let date = this.formGroup.get('date').value;
      let endDate = this.formGroup.get('endDate').value;

      this.minReturnDate = date;

      if((new Date(this.ngbDateToString(date))).getTime() > (new Date(this.ngbDateToString(endDate))).getTime()) {
        this.formGroup.get('endDate').setValue(date);
      }

      if (formState.fields.searchType === SearchType.OneWayTrip) {

        this.formGroup.get('endDate').setValue(date);

        this.formGroup.get('endDate').disable({
          emitEvent: false
        });

      } else {
        this.formGroup.get('endDate').enable({
          emitEvent: false
        });
      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isHovered(date: NgbDate) {

    let toDate = this.formGroup.get('endDate').value;
    let fromDate = this.formGroup.get('date').value;

    return fromDate && !toDate && this.hoveredDate && date.after(fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {

    let toDate = this.formGroup.get('endDate').value;
    let fromDate = this.formGroup.get('date').value;

    return date.after(fromDate) && date.before(toDate);
  }

  isRange(date: NgbDate) {

    let toDate = this.formGroup.get('endDate').value;
    let fromDate = this.formGroup.get('date').value;

    return date.equals(fromDate) || date.equals(toDate) || this.isInside(date) || this.isHovered(date);
  }

}

