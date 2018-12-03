import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { selectAirpulseRadiusData } from '../../../airpulse.reducer';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

const KILOMETERS_ABBREVIATION = 'km';
const MILES_ABBREVIATION = 'mi';

@Component({
  selector: 'ama-airpulse-search-radius',
  templateUrl: './radius.component.html'
})
export class RadiusComponent implements OnInit, OnDestroy {
  @Input()
  id: string;
  @Input()
  label: string;
  @Input()
  airport: string;
  radiusValue: number;
  radiusChecked: boolean;
  distanceUnit: string;
  storeSubscription: Subscription;
  maxDistance: number;
  minDistance = 0;
  @Input()
  parentForm: FormGroup;
  @Input()
  radiusFormControl: string;

  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    // this.storeSubscription = this.store.pipe(select(selectAirpulseRadiusData)).subscribe(radiusData => {
    //   if (radiusData) {
    //     this.distanceUnit = this.processDistanceUnit(radiusData.distanceUnit);
    //     if (this.distanceUnit === KILOMETERS_ABBREVIATION) {
    //       this.maxDistance = 300;
    //     } else {
    //       this.maxDistance = 180;
    //     }
    //     this.radiusValue = radiusData.rangeRadius;
    //     // this is in timeout to wait for view initialization
    //     setTimeout(() => {
    //       if (this.parentForm.controls[this.radiusFormControl].value === undefined) {
    //         this.parentForm.controls[this.radiusFormControl].setValue(this.radiusValue);
    //       }
    //     });
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

  processDistanceUnit(distanceUnitFromServer: string): string {
    if (distanceUnitFromServer === 'M') {
      return MILES_ABBREVIATION;
    } else {
      return KILOMETERS_ABBREVIATION;
    }
  }

  onRadiusChecked(newStatus): void {
    if (newStatus) {
      this.parentForm.controls[this.radiusFormControl].enable();
    } else {
      this.parentForm.controls[this.radiusFormControl].disable();
    }
  }
}
