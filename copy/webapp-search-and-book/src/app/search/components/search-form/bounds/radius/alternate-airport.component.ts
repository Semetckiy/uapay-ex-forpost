import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'ama-airpulse-search-alternate-airport',
  templateUrl: './alternate-airport.component.html',
  styleUrls: ['./alternate-airport.component.scss']
})
export class AlternateAirportComponent implements OnInit {
  @Input()
  boundIndex: number;
  @Input()
  fromAirport: string;
  @Input()
  toAirport: string;
  @Input()
  title: string;
  @Input()
  parentForm: FormGroup;
  fromAirportRadiusId: string;
  toAirportRadiusId: string;
  radiusForm: FormGroup;

  ngOnInit(): void {
    this.fromAirportRadiusId = `fromAirportRadius${this.boundIndex}`;
    this.toAirportRadiusId = `toAirportRadius${this.boundIndex}`;
    // this.radiusForm = this.getBoundForm(this.boundIndex);
  }

  // private getBoundForm(index): FormGroup {
  //   const searchBoundsArray = this.parentForm.controls['searchBounds'] as FormArray;
  //   return searchBoundsArray.controls[index] as FormGroup;
  // }
}
