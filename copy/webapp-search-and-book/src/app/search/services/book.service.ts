import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FarePricingRequest} from '../models/fare-pricing-request.model';
import {map} from 'rxjs/internal/operators';
import {PassengerInfo} from '../models/book.model';
import {BookClientService} from './book-client.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private travelShopperTicket: number;

  constructor(private client: BookClientService) { }

  farePricing(elements, recommendationId: string, travelShopperTicket: number): Observable<boolean> {
    this.travelShopperTicket = travelShopperTicket ? travelShopperTicket : 0;

    const request: FarePricingRequest = {
      recommendations: [{
          elements,
          recommendationId
      }],
      travelShopperTicket: this.travelShopperTicket
    };

    return this.client.farePricing(request).pipe(map(jsonRawResponse => {
      this.travelShopperTicket = jsonRawResponse.response.model.pageTicket;
      if (this.hasError(jsonRawResponse)) {
        throw new Error(this.getErrorText(jsonRawResponse));
      } else if (jsonRawResponse.response.model.status === 'success') {
        return true;
      } else {
        throw new Error('Error fare pricing');
      }
    }));
  }

  bookTripPlan(passengerInfo: PassengerInfo[], fopInfo: string, segmentCount: number): Observable<boolean> {
    this.travelShopperTicket += 0;

    let request = {
      ACTION: 'Book',
      TYPE: 'TRAVELLER_INFORMATION',
      // PAYMENT_GROUP_1_LIST_PRODUCT_ID_1_PRODUCT_ID: 1,
      // PAYMENT_GROUP_1_LIST_PRODUCT_ID_1_PRODUCT_TYPE: 'AIR',

      PAYMENT_GROUP_1_LIST_PAYMENT_1_FORM_OF_PAYMENT_ID: 1,
      PAYMENT_GROUP_1_LIST_PAYMENT_1_PAYMENT_TYPE_CODE: fopInfo,
      // PAYMENT_GROUP_1_LIST_PAYMENT_1_BASIC_FORM_OF_PAYMENT: '',
      PAGE_TICKET: this.travelShopperTicket // ?increase number to switch proper context
    };

    for (let i = 1; i <= segmentCount; i++) {
      request = Object.assign(request, {
        ['PAYMENT_GROUP_1_LIST_PRODUCT_ID_' + i + '_PRODUCT_ID']: i,
        ['PAYMENT_GROUP_1_LIST_PRODUCT_ID_' + i + '_PRODUCT_TYPE']: 'AIR',
      });
    }

    let passengerIndex = 1;

    for (let passenger of passengerInfo) {
      if (passenger.type === 'INF') {
        passengerIndex--;
        request = Object.assign(request, {
          ['INFANT_LAST_NAME_' + passengerIndex.toString()]: passenger.lastName,
          ['INFANT_FIRST_NAME_' + passengerIndex.toString()]: passenger.firstName,
          ['INFANT_DATE_OF_BIRTH_' + passengerIndex.toString()]: passenger.dateOfBirth // 198009010000,
        });
      } else {
        request = Object.assign(request, {
          ['TITLE_' + passengerIndex.toString()]: passenger.title,
          ['LAST_NAME_' + passengerIndex.toString()]: passenger.lastName,
          ['FIRST_NAME_' + passengerIndex.toString()]: passenger.firstName,
          ['DATE_OF_BIRTH_' + passengerIndex.toString()]: passenger.dateOfBirth, // 198009010000,
          ['CONTACT_POINT_EMAIL_' + passengerIndex.toString() + '_1']: passenger.email,
          ['CONTACT_POINT_OTHER_' + passengerIndex.toString() + '_1']: passenger.phone,
        });
      }
      passengerIndex++;
    }

    return this.client.bookTripPlan(request).pipe(map(jsonRawResponse => {
      console.log('==== bookTripPlan RESPONSE', jsonRawResponse);
      if (jsonRawResponse.response.model.result) {
        console.log('bookTripPlan event', jsonRawResponse);
        return true;
      } else {
        console.log('bookTripPlan event', jsonRawResponse);
        throw new Error('Error book trip plan - no result');
      }
    }));
  }

  commitPnr(): Observable<any> {
    return this.client.sendCrypticCommandList({ LIST_COMMAND: [
      {ENTRY: 'TKOK'},
      {ENTRY: 'AP'},  // send if not  contact data from passengers
      {ENTRY: 'RFSB'}, // clarify what put in sign
      {ENTRY: 'ET'},
      {ENTRY: 'ET'}]
    });
  }

  private hasError(jsonRawResponse): boolean {
    const errorsArray = jsonRawResponse.response.model.errors;

    if (!errorsArray) {
      return false;
    }

    for (const error of errorsArray) {
      if (error.type === 'E') {
        return true;
      }
    }

    return false;
  }

  private getErrorText(jsonRawResponse): string {
    const errorsArray = jsonRawResponse.response.model.errors;

    if (!errorsArray) {
      return '';
    }

    for (const error of errorsArray) {
      if (error.type === 'E') {
        return error.number + ' ' + error.text;
      }
    }
  }
}
