import { Injectable } from '@angular/core';
import { AirportSuggestion } from './airport-suggestion.model';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { StringHelper } from '../../../../secoHelpers/string.helper';
import { AirportAutocompletionDownloadService } from './airport-autocompletion.download.service';
import { AirportAutocompletionParsingService } from './airport-autocompletion.parsing.service';

@Injectable()
export class AirportAutocompletionService {
  constructor(
    private readonly autocompletionDownloadService: AirportAutocompletionDownloadService,
    private readonly autocompletionParsingService: AirportAutocompletionParsingService
  ) {}

  searchAirports = (text$: Observable<string>) =>
    text$.pipe(
      map(inputValue => StringHelper.stripAccents(inputValue)),
      distinctUntilChanged(),
      map(inputValue => {
        if (!this.isAlphabetical(inputValue)) {
          return '';
        }
        return inputValue;
      }),
      mergeMap(inputValue => this.autocomplete(inputValue))
    )

  /**
   * Get plain text file and parse it according to the given letters
   * @param letters Letters written in the input (ex: PA)
   * @return A subject of an array of suggestions
   */
  autocomplete(letters: string): Observable<AirportSuggestion[]> {
    return this.autocompletionDownloadService.getTextFileForLetter(letters).pipe(
      map(plainText => {
        return this.autocompletionParsingService.parseFileAndFilterAndSort(letters, plainText);
      })
    );
  }

  airportSuggestionFormatter = (airport: AirportSuggestion) => airport.iata;

  isAlphabetical(str: string): boolean {
    return /^[a-zA-Z ]*$/.test(str);
  }
}
