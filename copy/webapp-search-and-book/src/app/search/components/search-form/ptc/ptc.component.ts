import {Component, Output, EventEmitter, OnInit, OnDestroy, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PTCControlService } from './ptc-control.service';
import { PTCService } from './ptc.service';
import { PTCBase } from './ptc-base';
import { PNR, PTC } from './pnr.model';
import { Store, select } from '@ngrx/store';
import {ArrayHelper} from "../../../secoHelpers/array.helper";
// import { selectAirpulsePnr } from '../../airpulse.reducer';

@Component({
  selector: 'ama-ng-airpulse-ptc',
  templateUrl: './ptc.component.html',
  styleUrls: ['./ptc.component.scss']
})
export class PTCComponent implements OnInit, OnDestroy {
  @Output()
  ptcValues = new EventEmitter<any>();
  formPTC: FormGroup;
  ptcBaseObject: PTCBase[];
  pnrContext: PNR;
  storeSubscription: any;

  @Input() value: any;

  constructor(
    private readonly ptcService: PTCService,
    private readonly ptcControlService: PTCControlService,
    private readonly store: Store<any>
  ) {
    this.ptcBaseObject = this.ptcService.getPTCs();
    this.formPTC = this.ptcControlService.toFormGroup(this.ptcService.getPTCs());
  }

  // groupBy<TItem>(items: TItem[], itemProperty: string) {
  //   return items.reduce((accumulator, currentValue) => {
  //     (accumulator[currentValue[itemProperty]] = accumulator[currentValue[itemProperty]] || []).push(currentValue);
  //     return accumulator;
  //   }, {});
  // }

  ngOnInit() {
    this.formPTC.patchValue(this.value);
    // this.storeSubscription = this.store.pipe(select(selectAirpulsePnr)).subscribe((pnr: PNR) => {
    //   this.pnrContext = pnr;
    //   if (pnr && pnr.travellers && pnr.travellers.length > 0) {
    //     this.ptcService.setHasInfantForPtcs(pnr.travellers);
    //     this.ptcValues.emit(pnr.travellers.map(traveller => traveller.ptc));
    //   }
    // });
  }

  ngOnDestroy() {
    //this.storeSubscription.unsubscribe();
  }

  updateValue(event) {
    this.ptcValues.emit(event);
  }

  computePassengerInputValue(PNRContext: PNR): string {
    let resultValue = '';
    const splitValues: string[] = [];
    const ptcs: PTC[] = PNRContext.travellers.map(traveller => traveller.ptc);
    const infantsNumber = PNRContext.travellers.filter(traveller => traveller.hasInfant).length;
    const ptcsGroupedByCode: { [ptcCode: string]: PTC[] } = ArrayHelper.groupBy(ptcs, 'code');

    for (const ptcCode of Object.keys(ptcsGroupedByCode)) {
      splitValues.push(`${ptcsGroupedByCode[ptcCode].length} ${ptcCode}`);
    }

    console.log(splitValues);

    resultValue = splitValues.join(', ');

    if (infantsNumber > 0) {
      resultValue += `, ${infantsNumber} INF`;
    }

    return resultValue;
  }
}
