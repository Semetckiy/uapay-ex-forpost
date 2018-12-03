// import { SearchBoundsComponent } from './search-bounds.component';
// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TranslatePipeMock } from '@seco/core/mock';
// import { TranslatePipe, IdGenerationModule } from '@seco/core';
// import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
// import { DatePickerMobileComponent } from '../date-picker-mobile/date-picker-mobile.component';
// import { NgbModule, DfDatePickerModule } from 'design-factory-v2';
// import { SearchFormGroupService } from '../search-form-group.service';
// import { AirportAutocompletionService } from './airport-autocompletion/airport-autocompletion.service';
// import { defer } from 'rxjs';
// import { AirportAutocompleteMock } from './airport-autocompletion/mocks/autocomplete.mock';
// import { HttpModule } from '@seco/dev-utils';
// import { HighlightMatchPipe } from './airport-autocompletion/highlight-match.pipe';
// import { AirportAutocompletionDownloadService } from './airport-autocompletion/airport-autocompletion.download.service';
// import { AirportAutocompletionParsingService } from './airport-autocompletion/airport-autocompletion.parsing.service';
// import { RadiusComponent } from './radius/radius.component';
// import { AlternateAirportComponent } from './radius/alternate-airport.component';
// import { AIRPULSE_FEATURE, airpulseReducer } from '../../airpulse.reducer';
// import { StoreModule } from '@ngrx/store';
//
// // See examples of ngbootstrap units tests here :
// // https://github.com/ng-bootstrap/ng-bootstrap/blob/b73f350c8f21a3f33a94db53b202d9899e3e5412/src/typeahead/typeahead.spec.ts
//
// export default function() {
//   describe('SearchBoundsComponent', () => {
//     const ICON_PLANE = 'icon-plane';
//     const FROM_INPUT_ID = '#fromInput';
//     const TO_INPUT = '#toInput';
//     const NGB_TYPEAHEAD_WINDOW = '+ngb-typeahead-window';
//     const BUTTON_DROPDOWN_ITEM = 'button.dropdown-item';
//
//     let component: SearchBoundsComponent;
//     let fixture: ComponentFixture<SearchBoundsComponent>;
//     let fromInput: HTMLInputElement;
//     let toInput: HTMLInputElement;
//     let hostElement: any;
//     let airportAutocompletionService: AirportAutocompletionService;
//
//     beforeEach(async(() => {
//       const reducer = {};
//       reducer[AIRPULSE_FEATURE] = airpulseReducer;
//       TestBed.configureTestingModule({
//         imports: [
//           IdGenerationModule,
//           FormsModule,
//           ReactiveFormsModule,
//           NgbTypeaheadModule.forRoot(),
//           NgbModule.forRoot(),
//           HttpModule.forRoot(),
//           DfDatePickerModule,
//           StoreModule.forRoot(reducer)
//         ],
//         declarations: [
//           SearchBoundsComponent,
//           RadiusComponent,
//           AlternateAirportComponent,
//           TranslatePipeMock,
//           DatePickerMobileComponent,
//           HighlightMatchPipe
//         ],
//         providers: [
//           { provide: TranslatePipe, useClass: TranslatePipeMock },
//           AirportAutocompletionService,
//           AirportAutocompletionParsingService,
//           SearchFormGroupService,
//           AirportAutocompletionDownloadService
//         ]
//       }).compileComponents();
//     }));
//
//     beforeEach(() => {
//       fixture = TestBed.createComponent(SearchBoundsComponent);
//       component = fixture.componentInstance;
//       component.parentForm = TestBed.get(SearchFormGroupService).getNewSearchBoundsFormGroup();
//       airportAutocompletionService = TestBed.get(AirportAutocompletionService);
//       hostElement = fixture.nativeElement;
//       fixture.detectChanges();
//       fromInput = hostElement.querySelector(FROM_INPUT_ID) as HTMLInputElement;
//       toInput = hostElement.querySelector(TO_INPUT) as HTMLInputElement;
//       fixture.detectChanges();
//     });
//
//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });
//
//     it('should display airports data correctly', async(() => {
//       spyOn(airportAutocompletionService, 'autocomplete').and.returnValue(
//         asyncData(AirportAutocompleteMock.mockAutocompletionCDG())
//       );
//
//       airportAutocompletionService.autocomplete('par');
//
//       fromInput.value = 'CDG';
//       fromInput.dispatchEvent(new Event('input'));
//       toInput.value = 'CDG';
//       toInput.dispatchEvent(new Event('input'));
//       fixture.detectChanges();
//
//       fixture.whenStable().then(() => {
//         expectAtLeastOneResult();
//         const fromCDGSuggestionEl = getFirstFromSuggestionEl();
//         const toCDGSuggestionEl = getFirstToSuggestionEl();
//         expect(fromCDGSuggestionEl.innerHTML.toLowerCase()).toContain('charles de gaulle');
//         expect(toCDGSuggestionEl.innerHTML.toLowerCase()).toContain('charles de gaulle');
//         expect(fromCDGSuggestionEl.innerHTML.toLowerCase()).toContain('france');
//         expect(toCDGSuggestionEl.innerHTML.toLowerCase()).toContain('france');
//         expect(fromCDGSuggestionEl.innerHTML.toLowerCase()).toContain('cdg');
//         expect(toCDGSuggestionEl.innerHTML.toLowerCase()).toContain('cdg');
//         expect(fromCDGSuggestionEl.innerHTML.toLowerCase()).toContain(ICON_PLANE);
//         expect(toCDGSuggestionEl.innerHTML.toLowerCase()).toContain(ICON_PLANE);
//       });
//     }));
//
//     it('should display cities data correctly', async(() => {
//       spyOn(airportAutocompletionService, 'autocomplete').and.returnValue(
//         asyncData(AirportAutocompleteMock.mockAutocompletionPAR())
//       );
//
//       fromInput.value = 'PAR';
//       fromInput.dispatchEvent(new Event('input'));
//       toInput.value = 'PAR';
//       toInput.dispatchEvent(new Event('input'));
//       fixture.detectChanges();
//
//       fixture.whenStable().then(() => {
//         expectAtLeastOneResult();
//         const fromPARSuggestionEl = getFirstFromSuggestionEl();
//         const toPARSuggestionEl = getFirstToSuggestionEl();
//         expect(fromPARSuggestionEl.innerHTML.toLowerCase()).toContain('france');
//         expect(toPARSuggestionEl.innerHTML.toLowerCase()).toContain('france');
//         expect(fromPARSuggestionEl.innerHTML.toLowerCase()).toContain('par');
//         expect(toPARSuggestionEl.innerHTML.toLowerCase()).toContain('par');
//         expect(fromPARSuggestionEl.innerHTML.toLowerCase()).toContain(ICON_PLANE);
//         expect(toPARSuggestionEl.innerHTML.toLowerCase()).toContain(ICON_PLANE);
//       });
//     }));
//
//     it('should display airport under cities with special icon', async(() => {
//       spyOn(airportAutocompletionService, 'autocomplete').and.returnValue(
//         asyncData(AirportAutocompleteMock.mockAutocompletionPAR())
//       );
//
//       fromInput.value = 'par';
//       fromInput.dispatchEvent(new Event('input'));
//       toInput.value = 'par';
//       toInput.dispatchEvent(new Event('input'));
//       fixture.detectChanges();
//
//       fixture.whenStable().then(() => {
//         expectAtLeastOneResult();
//         const fromCDGSuggestionEl = getFirstFromSuggestionElContainingText('CDG');
//         const toPARSuggestionEl = getFirstToSuggestionElContainingText('CDG');
//         expect(fromCDGSuggestionEl.innerHTML.toLowerCase()).toContain('icon-level-right');
//         expect(toPARSuggestionEl.innerHTML.toLowerCase()).toContain('icon-level-right');
//       });
//     }));
//
//     it('should display state data correctly for airports if present', async(() => {
//       spyOn(airportAutocompletionService, 'autocomplete').and.returnValue(
//         asyncData(AirportAutocompleteMock.mockAutocompletionBUE())
//       );
//
//       fromInput.value = 'BUE';
//       fromInput.dispatchEvent(new Event('input'));
//       toInput.value = 'BUE';
//       toInput.dispatchEvent(new Event('input'));
//       fixture.detectChanges();
//
//       fixture.whenStable().then(() => {
//         expectAtLeastOneResult();
//         const fromBUESuggestionEl = getFirstFromSuggestionEl();
//         const toBUESuggestionEl = getFirstToSuggestionEl();
//         expect(fromBUESuggestionEl.innerHTML.toLowerCase()).toContain('ba');
//         expect(toBUESuggestionEl.innerHTML.toLowerCase()).toContain('ba');
//       });
//     }));
//
//     it('should display state data correctly for cities if present', async(() => {
//       spyOn(airportAutocompletionService, 'autocomplete').and.returnValue(
//         asyncData(AirportAutocompleteMock.mockAutocompletionSFO())
//       );
//
//       fromInput.value = 'SFO';
//       fromInput.dispatchEvent(new Event('input'));
//       toInput.value = 'SFO';
//       toInput.dispatchEvent(new Event('input'));
//       fixture.detectChanges();
//
//       fixture.whenStable().then(() => {
//         expectAtLeastOneResult();
//         const fromSFOSuggestionEl = getFirstFromSuggestionEl();
//         const toSFOSuggestionEl = getFirstToSuggestionEl();
//         expect(fromSFOSuggestionEl.innerHTML.toLowerCase()).toContain('ca');
//         expect(toSFOSuggestionEl.innerHTML.toLowerCase()).toContain('ca');
//       });
//     }));
//
//     function expectAtLeastOneResult() {
//       const fromResultWindow = fixture.nativeElement.querySelector(FROM_INPUT_ID + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       expect(fromResultWindow).not.toBeNull();
//       const fromSuggestions = fromResultWindow.querySelectorAll(BUTTON_DROPDOWN_ITEM);
//       expect(fromSuggestions.length).toBeGreaterThanOrEqual(1);
//       const toResultWindow = fixture.nativeElement.querySelector(TO_INPUT + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       expect(toResultWindow).not.toBeNull();
//       const toSuggestions = toResultWindow.querySelectorAll(BUTTON_DROPDOWN_ITEM);
//       expect(toSuggestions.length).toBeGreaterThanOrEqual(1);
//     }
//
//     function getFirstFromSuggestionEl(): Element {
//       const fromResultWindow = fixture.nativeElement.querySelector(FROM_INPUT_ID + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       return fromResultWindow.querySelector(BUTTON_DROPDOWN_ITEM);
//     }
//
//     function getFirstToSuggestionEl(): Element {
//       const fromResultWindow = fixture.nativeElement.querySelector(TO_INPUT + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       return fromResultWindow.querySelector(BUTTON_DROPDOWN_ITEM);
//     }
//
//     function getFirstFromSuggestionElContainingText(text: string): Element {
//       const fromResultWindow = fixture.nativeElement.querySelector(FROM_INPUT_ID + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       const suggestionElements = fromResultWindow.querySelectorAll(BUTTON_DROPDOWN_ITEM);
//       // we convert NodeList to Array
//       const suggestionElementsArr: Element[] = Array.prototype.slice.call(suggestionElements);
//       if (!suggestionElementsArr.length) {
//         return null;
//       }
//       return suggestionElementsArr.filter(el => el.innerHTML.toLowerCase().includes(text.toLowerCase()))[0];
//     }
//
//     function getFirstToSuggestionElContainingText(text: string): Element {
//       const toResultWindow = fixture.nativeElement.querySelector(TO_INPUT + NGB_TYPEAHEAD_WINDOW) as HTMLDivElement;
//       const suggestionElements = toResultWindow.querySelectorAll(BUTTON_DROPDOWN_ITEM);
//       // we convert NodeList to Array
//       const suggestionElementsArr: Element[] = Array.prototype.slice.call(suggestionElements);
//       if (!suggestionElementsArr.length) {
//         return null;
//       }
//       return suggestionElementsArr.filter(el => el.innerHTML.toLowerCase().includes(text.toLowerCase()))[0];
//     }
//
//     // function expectNoResult() {
//     //   const fromResultWindow = <HTMLDivElement>fixture.nativeElement.querySelector(FROM_INPUT_ID + NGB_TYPEAHEAD_WINDOW);
//     //   expect(fromResultWindow).toBeNull();
//     //   const toResultWindow = <HTMLDivElement>fixture.nativeElement.querySelector(TO_INPUT + NGB_TYPEAHEAD_WINDOW);
//     //   expect(toResultWindow).toBeNull();
//     // }
//   });
// }
// export function asyncData<T>(data: T) {
//   return defer(() => Promise.resolve(data));
// }
