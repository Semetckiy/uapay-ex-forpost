import { Injectable } from '@angular/core';
import {HttpService} from "@seco/core/src/app/http-angular/http.service";
import {Observable} from "rxjs";
import {FarePricingRequest} from "../models/fare-pricing-request.model";

@Injectable({
  providedIn: 'root'
})
export class BookClientService {

  constructor(private httpService: HttpService) {

  }

  farePricing(request: FarePricingRequest): Observable<any> {
    return this.httpService.postApfPlus('masterpricer', 'farePricing', request);
  }

  bookTripPlan(request): Observable<any> {
    return this.httpService.postApfPlus('masterpricer','booktripplan', request);
  }

  sendCrypticCommandList(request): Observable<any> {
    return this.httpService.postDac('SendCrypticCommandList', request);
  }
}
