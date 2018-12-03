import { FormArray, FormGroup } from '@angular/forms';
import { Input, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AirportAutocompletionService } from './airport-autocompletion/airport-autocompletion.service';
import { SuggestionType } from './airport-autocompletion/airport-suggestion.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
// import { selectAirpulseRadiusData } from '../../airpulse.reducer';

@Component({
  selector: 'ama-airpulse-search-bounds',
  templateUrl: './search-bounds.component.html',
  styleUrls: ['./search-bounds.component.scss']
})
export class SearchBoundsComponent implements OnInit {
  @Input()
  parentForm: FormGroup;
  suggestionType = SuggestionType;
  radiusDataState$: Observable<any>;

  constructor(
    public airportAutocompletionService: AirportAutocompletionService,
    private readonly elementRef: ElementRef,
    private readonly store: Store<any>
  ) {}

  //TODO: For now code for airport radius not worked and calling
  ngOnInit(): void {
    // this.radiusDataState$ = this.store.pipe(select(selectAirpulseRadiusData));
  }

  // setDepartureDate(date: NgbDateStruct) {
  //   this.getBoundForm(0).patchValue({ date });
  // }
  //
  // setReturnDate(date: NgbDateStruct) {
  //   this.getBoundForm(1).patchValue({ date });
  // }

  // private getBoundForm(index): FormGroup {
  //   const searchBoundsArray = this.parentForm.controls['searchBounds'] as FormArray;
  //   return searchBoundsArray.controls[index] as FormGroup;
  // }

  @HostListener('keydown.ArrowDown', ['$event.target'])
  @HostListener('keydown.ArrowUp', ['$event.target'])
  onArrowNavigation(target: any) {
    const inputId = target.attributes ? target.attributes.id.nodeValue : null;
    if (inputId && (inputId === 'fromInput' || inputId === 'toInput')) {
      const typeaheadWindowSelector = `[id$=${inputId}]+ngb-typeahead-window`;
      const typeaheadActiveSuggestionSelector = `[id$=${inputId}]+ngb-typeahead-window .active`;
      const typeaheadWindowElt = this.elementRef.nativeElement.querySelector(typeaheadWindowSelector);
      const activeSuggestionElt = this.elementRef.nativeElement.querySelector(typeaheadActiveSuggestionSelector);
      const windowTopPadding = 8;

      if (typeaheadWindowElt && activeSuggestionElt) {
        typeaheadWindowElt.scrollTop = activeSuggestionElt.offsetTop - windowTopPadding;
      }
    }
  }
}
