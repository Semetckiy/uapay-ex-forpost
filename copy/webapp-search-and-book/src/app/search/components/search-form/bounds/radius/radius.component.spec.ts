// import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';
// import { RadiusComponent } from './radius.component';
// import { AIRPULSE_FEATURE, airpulseReducer } from '../../../airpulse.reducer';
// import { StoreModule, Store } from '@ngrx/store';
// import { InitSearchFinished } from '../../../airpulse.actions';
// import { SearchFormGroupService } from '../../search-form-group.service';
// import {IdGenerationModule} from '@seco/core';
//
// const initSearchActionWithRadiusData = new InitSearchFinished({
//   bookingEngineResponse: {
//     fareParameters: {
//       defaultModelId: null,
//       marginManager: null,
//       modelIds: [],
//       currencyList: [],
//       defaultCurrency: null
//     },
//     allowedCabins: [],
//     pnr: null,
//     errors: [],
//     presetGroupList: null
//   },
//   configuration: {
//     distanceUnit: 'K',
//     radiusEnabled: true,
//     rangeRadius: 200
//   }
// });
//
// export function RadiusComponentSpec() {
//   describe('RadiusComponent', () => {
//     let component: RadiusComponent;
//     let fixture: ComponentFixture<RadiusComponent>;
//     let hostElement: any;
//     let store: Store<any>;
//     let checkbox;
//
//     beforeEach(() => {
//       const reducer = {};
//       reducer[AIRPULSE_FEATURE] = airpulseReducer;
//       TestBed.configureTestingModule({
//         imports: [FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducer), IdGenerationModule],
//         declarations: [RadiusComponent],
//         providers: [SearchFormGroupService]
//       }).compileComponents();
//     });
//
//     beforeEach(() => {
//       fixture = TestBed.createComponent(RadiusComponent);
//       component = fixture.componentInstance;
//       component.parentForm = getBoundForm(TestBed.get(SearchFormGroupService).getNewSearchBoundsFormGroup(), 0);
//       component.radiusFormControl = 'fromAirportRadius';
//       component.id = 'radiusTest';
//       component.ngOnInit();
//       fixture.detectChanges();
//       hostElement = fixture.nativeElement;
//       store = fixture.debugElement.injector.get(Store);
//       checkbox = hostElement.querySelector('#radiusTest') as HTMLInputElement;
//     });
//
//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });
//
//     it('should enable / disable the form control when checked / unchecked', () => {
//       store.dispatch(initSearchActionWithRadiusData);
//       fixture.detectChanges();
//       expect(component.parentForm.controls[component.radiusFormControl].enabled).toEqual(false);
//       checkbox.click();
//       fixture.detectChanges();
//       expect(component.parentForm.controls[component.radiusFormControl].enabled).toEqual(true);
//       checkbox.click();
//       fixture.detectChanges();
//       expect(component.parentForm.controls[component.radiusFormControl].enabled).toEqual(false);
//     });
//
//     it('should update the form control value when moving the range', async(() => {
//       const rangeInput = hostElement.querySelector('input[type="range"]');
//       store.dispatch(initSearchActionWithRadiusData);
//       fixture.detectChanges();
//       checkbox.click();
//       fixture.whenStable().then(() => {
//         expect(component.parentForm.controls[component.radiusFormControl].value).toEqual(200);
//         rangeInput.value = 250;
//         rangeInput.dispatchEvent(new Event('input'));
//         expect(component.parentForm.controls[component.radiusFormControl].value).toEqual(250);
//         rangeInput.value = 150;
//         rangeInput.dispatchEvent(new Event('input'));
//         expect(component.parentForm.controls[component.radiusFormControl].value).toEqual(150);
//       });
//     }));
//   });
//
//   function getBoundForm(parentForm: FormGroup, index: number): FormGroup {
//     const searchBoundsArray = parentForm.controls['searchBounds'] as FormArray;
//     return searchBoundsArray.controls[index] as FormGroup;
//   }
// }
