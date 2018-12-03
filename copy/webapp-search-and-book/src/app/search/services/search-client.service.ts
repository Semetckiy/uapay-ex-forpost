import {Injectable} from '@angular/core';
import {HttpService} from '@seco/core';
import {map} from "rxjs/internal/operators";
import {SearchParams} from "../models/search-params.model";
import {transformParams} from './transform';

@Injectable({
  providedIn: 'root'
})
export class SearchClientService {
  constructor(private httpService: HttpService) {}

  load(params: SearchParams) {
    let apfParameters = transformParams(params);

    return this.httpService.postApfPlus('masterpricer', 'masterPricerSearch', apfParameters).pipe(
      map(data => data.response.model.results)
    );
  }
}
