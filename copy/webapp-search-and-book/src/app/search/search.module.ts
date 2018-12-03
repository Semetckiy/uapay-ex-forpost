import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromFeature from './reducers/index';
import {FormGroupModule} from '@uxdf/p-components';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchResultsItemComponent} from './components/search-results-item/search-results-item.component';
import {SearchResultsIsEmptyComponent} from './components/search-results-empty/search-results-is-empty.component';
import {SearchLoaderComponent} from './components/search-loader/search-loader.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {ResultsEffects} from './effects/results.effects';
import {FormEffects} from './effects/form.effects';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {PTCModule} from './components/search-form/ptc/ptc.module';
import {IdGenerationModule, TranslateModule} from '@seco/core';
import {SearchBoundsComponent} from './components/search-form/bounds/search-bounds.component';
import {AlternateAirportComponent} from './components/search-form/bounds/radius/alternate-airport.component';
import {RadiusComponent} from './components/search-form/bounds/radius/radius.component';
import {AirportAutocompletionModule} from './components/search-form/bounds/airport-autocompletion/airport-autocompletion.module';
import {HighlightMatchPipe} from './components/search-form/bounds/airport-autocompletion/highlight-match.pipe';
import {messages} from '../standalone/messages';
import {TextDay} from './components/search-results/pipe/textDay.pipe';
import {NumbertDay} from './components/search-results/pipe/numberDay.pipe';
import {TextMonth} from './components/search-results/pipe/textMonth.pipe';
import {Hhmm} from './components/search-results/pipe/hhmm.pipe';
import {FilterUnique} from './components/search-results/pipe/filterUnique.pipe';
import {SearchPageComponent} from '../search-page/search-page.component';
import {AppPageLayoutModule} from '../app-page-layout.module';
import {FiltersComponent} from './components/search-results/filters/filters.component';
import {FilterCheckboxComponent} from './components/search-results/filters/filter-checkbox/filter-checkbox.component';
import {FilterRangeComponent} from './components/search-results/filters/filter-range/filter-range.component';
import {FormComponent as BookFormComponent} from './components/book/form/form.component';
import {Ng5SliderModule} from 'ng5-slider';
import {FiltersEffects} from './effects/filters.effects';
import {ConnectFormDirective} from './components/search-form/connect-form.directive';
import {ErrorMessageComponent} from './components/error-message/error-message.component';
import { CustomValidators } from './components/search-form/custom-validators';
import { SearchRecapComponent } from './components/search-recap/search-recap.component';
import {BookEffects} from './effects/book.effects';

@NgModule({
  imports: [
    AirportAutocompletionModule,
    CommonModule,
    EffectsModule.forFeature([FormEffects, ResultsEffects, FiltersEffects, BookEffects]),
    FormGroupModule,
    IdGenerationModule,
    NgbDatepickerModule,
    NgbModule,
    NgbCollapseModule,
    PTCModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search', fromFeature.reducers),
    TranslateModule.forFeature(messages),
    AppPageLayoutModule,
    Ng5SliderModule,
  ],
  providers: [
    CustomValidators
  ],
  declarations: [
    SearchResultsComponent,
    AlternateAirportComponent,
    HighlightMatchPipe,
    RadiusComponent,
    SearchResultsItemComponent,
    SearchResultsIsEmptyComponent,
    SearchLoaderComponent,
    SearchFormComponent,
    SearchBoundsComponent,
    TextDay,
    NumbertDay,
    TextMonth,
    Hhmm,
    FilterUnique,
    SearchPageComponent,
    FiltersComponent,
    FilterCheckboxComponent,
    FilterRangeComponent,
    BookFormComponent,
    ConnectFormDirective,
    ErrorMessageComponent,
    SearchRecapComponent
  ],
  exports: [
    SearchResultsComponent,
    SearchFormComponent,
    SearchResultsItemComponent,
    SearchResultsIsEmptyComponent,
    SearchLoaderComponent,
    SearchPageComponent,
  ]
})

export class SearchModule {}
