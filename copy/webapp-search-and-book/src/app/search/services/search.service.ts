import {Injectable} from '@angular/core';
import {ResultsItem} from '../models/results-item.model';
import {Observable, of} from 'rxjs';
import {mockData} from './mock-data';
import {transform} from './transform';
import {Progress, Sorting} from '../reducers/results.reducer';
import {SearchClientService} from './search-client.service';
import {map} from 'rxjs/internal/operators';
import {SearchParams} from '../models/search-params.model';
import {Dictionary} from '../models/dictionary.model';
import {FilterService} from './filter/filter.service';
import * as dict from '../models/dictionary.model';
import {FilterSet, ReceivedFilterValue} from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results: ResultsItem[];
  filteredResults: ResultsItem[];
  dictionaries: Dictionary;

  constructor(private client: SearchClientService, private filterService: FilterService) {}

  init(): Observable<boolean> {
    this.results = []; // webworker.stop()
    this.filteredResults = [];

    return of(true);
  }

  load(params: SearchParams): Observable<boolean> {
    return this.client.load(params).pipe(map((results: any) => {

      if (results.messages.length) {
        throw new Error(Object.keys(results.messages).map(x => results.messages[x].localizedMessage).join('. '));
      }

      this.results = transform(results);
      this.filteredResults = [...this.results];
      this.dictionaries = results.dictionary;

      return true;
    }));
  }

  getResults(page = 1, limit = 50, filters: FilterSet, sorting?: Sorting): Observable<ResultsItem[]> {
    this.filterService.setFilters(filters);
    this.filteredResults = this.filterService.applyFilters(this.results);

    return of(this.filteredResults.slice((page - 1) * limit, page * limit));
  }

  getTotal(): Observable<number> {
    return of(this.filteredResults.length);
  }

  getProgress(): Observable<Progress> {
    return of({
      done: 1,
      total: 1,
    });
  }

  getFiltersOptions(results: ResultsItem[], dictionary: dict.Dictionary): Observable<ReceivedFilterValue> {
    return of(this.filterService.getFiltersOptions(results, dictionary));
  }
}
