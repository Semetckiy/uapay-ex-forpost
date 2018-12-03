// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { PTCComponent } from './ptc.component';
// import { PTCService } from './ptc.service';
// import { PTCControlService } from './ptc-control.service';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TranslatePipeMock } from '@seco/core/mock';
// import { TranslatePipe, IdGenerationModule } from '@seco/core';
// import { AIRPULSE_FEATURE, airpulseReducer } from '../../airpulse.reducer';
// import { StoreModule, Store } from '@ngrx/store';
// import { InitSearchFinished } from '../../airpulse.actions';
// import * as PNRMocks from '../init-search.service.mock';
//
// const initSearchSuccessPayloadWithPnrContext = new InitSearchFinished({
//   bookingEngineResponse: {
//     fareParameters: {
//       defaultModelId: null,
//       marginManager: false,
//       modelIds: [],
//       currencyList: [],
//       defaultCurrency: null
//     },
//     allowedCabins: [],
//     pnr: PNRMocks.PNR1Adt1Chd1Mil,
//     errors: [],
//     presetGroupList: null
//   },
//   configuration: {
//     distanceUnit: null,
//     radiusEnabled: null,
//     rangeRadius: null
//   }
// });
//
// const initSearchSuccessPayloadWithPnrWithInfant = new InitSearchFinished({
//   bookingEngineResponse: {
//     fareParameters: {
//       defaultModelId: null,
//       marginManager: false,
//       modelIds: [],
//       currencyList: [],
//       defaultCurrency: null
//     },
//     allowedCabins: [],
//     pnr: PNRMocks.PNR1AdtWith1Inf,
//     errors: [],
//     presetGroupList: null
//   },
//   configuration: {
//     distanceUnit: null,
//     radiusEnabled: null,
//     rangeRadius: null
//   }
// });
//
// const initSearchSuccessPayloadWithoutPnrContext = new InitSearchFinished({
//   bookingEngineResponse: {
//     fareParameters: {
//       defaultModelId: null,
//       marginManager: false,
//       modelIds: [],
//       currencyList: [],
//       defaultCurrency: null
//     },
//     allowedCabins: [],
//     pnr: PNRMocks.PNRNoPassenger,
//     errors: [],
//     presetGroupList: null
//   },
//   configuration: {
//     distanceUnit: null,
//     radiusEnabled: null,
//     rangeRadius: null
//   }
// });
//
// export default function() {
//   describe('PTCComponent', () => {
//     const PREFILLED_PTC_INPUT_ID = '#prefilled-ptc-input';
//     const PTC_DESKTOP = 'ama-ng-airpulse-ptc-desktop';
//
//     let component: PTCComponent;
//     let fixture: ComponentFixture<PTCComponent>;
//     let store: Store<any>;
//     let hostElement: any;
//
//     beforeEach(async(() => {
//       const reducer = {};
//       reducer[AIRPULSE_FEATURE] = airpulseReducer;
//       TestBed.configureTestingModule({
//         imports: [FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducer), IdGenerationModule],
//         declarations: [PTCComponent, TranslatePipeMock],
//         providers: [PTCService, PTCControlService, { provide: TranslatePipe, useClass: TranslatePipeMock }],
//         schemas: [NO_ERRORS_SCHEMA]
//       }).compileComponents();
//     }));
//
//     beforeEach(() => {
//       fixture = TestBed.createComponent(PTCComponent);
//       component = fixture.componentInstance;
//       store = fixture.debugElement.injector.get(Store);
//       hostElement = fixture.nativeElement;
//     });
//
//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });
//
//     it('should display the prefilled readonly PTC input with the right values if there are passengers in the PNR context', () => {
//       store.dispatch(initSearchSuccessPayloadWithPnrContext);
//       fixture.detectChanges();
//       const prefilledPtcInput = hostElement.querySelector(PREFILLED_PTC_INPUT_ID) as HTMLInputElement;
//       const ptcDesktopEl: HTMLElement = hostElement.querySelector(PTC_DESKTOP);
//       expect(prefilledPtcInput).not.toBeNull();
//       expect(ptcDesktopEl).toBeNull();
//       expect(prefilledPtcInput.value.toLowerCase()).toContain('1 adt');
//       expect(prefilledPtcInput.value.toLowerCase()).toContain('1 mil');
//       expect(prefilledPtcInput.value.toLowerCase()).toContain('1 chd');
//     });
//
//     it('should display the prefilled readonly PTC input with the right values if there is an infant', () => {
//       store.dispatch(initSearchSuccessPayloadWithPnrWithInfant);
//       fixture.detectChanges();
//       const prefilledPtcInput = hostElement.querySelector(PREFILLED_PTC_INPUT_ID) as HTMLInputElement;
//       const ptcDesktopEl: HTMLElement = hostElement.querySelector(PTC_DESKTOP);
//       expect(prefilledPtcInput).not.toBeNull();
//       expect(ptcDesktopEl).toBeNull();
//       expect(prefilledPtcInput.value.toLowerCase()).toContain('1 adt');
//       expect(prefilledPtcInput.value.toLowerCase()).toContain('1 inf');
//     });
//
//     it('should display the ptc desktop component if there is no passenger in the PNR context', () => {
//       store.dispatch(initSearchSuccessPayloadWithoutPnrContext);
//       fixture.detectChanges();
//       const prefilledPtcInput = hostElement.querySelector(PREFILLED_PTC_INPUT_ID) as HTMLInputElement;
//       const ptcDesktopEl: HTMLElement = hostElement.querySelector(PTC_DESKTOP);
//       expect(prefilledPtcInput).toBeNull();
//       expect(ptcDesktopEl).not.toBeNull();
//     });
//   });
// }
