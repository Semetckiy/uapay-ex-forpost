import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';
import {SearchParams, SearchType} from '../../../models/search-params.model';
import {ResultsItem, Segment} from '../../../models/results-item.model';
import {PassengerInfo} from '../../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  data: any;

  @Input()
  searchParams: SearchParams;

  @Input()
  searchResultItem: ResultsItem;

  @Input()
  solutionIds: [number];

  @Output() onBook = new EventEmitter<any>();
  @Output() onBack = new EventEmitter<any>();

  segments: Segment[] = [];

  bookForm = this.formBuilder.group({
    travellers: this.formBuilder.array([]),
    formOfPayment: this.formBuilder.control('', [Validators.required])
  });

  travellers: FormArray;

  submitted = false;

  public constructor(private formBuilder: FormBuilder) {}

  private extractSegment() {
    for (let flight of this.searchResultItem.flights) {
      for (let flightSolution of flight.solutions) {
        if (this.solutionIds.indexOf(flightSolution.id) !== -1) {
          for (let segment of flightSolution.segments) {
            this.segments.push(segment);
          }
        }
      }
    }
  }

  private createPassengerFormGroups() {
    this.travellers = this.bookForm.get('travellers') as FormArray;
    for (let ptc of this.searchParams.ptcs) {
      this.travellers.push(
        this.formBuilder.group({
          type: [ptc.code],
          title: [''],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dateOfBirth: [''],
          // email: [''],
          // phone:[''],
        })
      );
    }
  }

  public ngOnInit() {
    this.extractSegment();
    this.createPassengerFormGroups();
  }

  public getFormOfPaymentControl() {
    return this.bookForm.get('formOfPayment');
  }

  public book() {
    this.submitted = true;

    let event = {
      form: this.bookForm.value,
      data: this.data,
    };
    event.form.segmentCount = this.segments.length;

    this.onBook.emit(event);
  }

  public back() {
    this.onBack.emit();
  }
}
