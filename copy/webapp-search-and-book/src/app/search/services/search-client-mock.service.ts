import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {mockData} from './mock-data';
import {SearchParams} from "../models/search-params.model";

@Injectable({
  providedIn: 'root'
})
export class SearchClientMockService {
  constructor() {
  }

  load(params: SearchParams) {
    return of(mockData);
  }
}
