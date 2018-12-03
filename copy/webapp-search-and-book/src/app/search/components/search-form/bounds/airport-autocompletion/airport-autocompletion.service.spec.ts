// import { TestBed } from '@angular/core/testing';
// import { HttpModule } from '@seco/dev-utils';
// import { StoreModule } from '@ngrx/store';
// import { reducers } from '@seco/redux';
// import { NgbModule } from 'design-factory-v2';
// import { defer, throwError } from 'rxjs';
// import { AirportAutocompletionDownloadService } from './airport-autocompletion.download.service';
// import { AirportAutocompletionParsingService } from './airport-autocompletion.parsing.service';
// import { HttpClient } from '@angular/common/http';
// import { mockAutocompletionGbP } from './mocks/download-gb-p.mock';
// import { AirportAutocompletionService } from './airport-autocompletion.service';
// import { mockAutocompletionGbC } from './mocks/download-gb-c.mock';
// import { mockAutocompletionGbN } from './mocks/download-gb-n.mock';
// import { mockParsingGbnice } from './mocks/parsing-gb-nice.mock';
// import { mockParsingGbpa } from './mocks/parsing-gb-par.mock';
// import { HTTP_CONFIG_TOKEN } from '@seco/core';
//
// const LANGUAGE = 'FR';
//
// export default function() {
//   describe('Autocompletion services ', () => {
//     let autocompletionDownloadService: AirportAutocompletionDownloadService;
//     let airportAutocompletionService: AirportAutocompletionService;
//     let httpClient: HttpClient;
//
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [HttpModule.forRoot(), NgbModule.forRoot(), StoreModule.forRoot(reducers)],
//         declarations: [],
//         providers: [
//           AirportAutocompletionDownloadService,
//           AirportAutocompletionParsingService,
//           AirportAutocompletionService,
//           HttpClient,
//           { provide: HTTP_CONFIG_TOKEN, useValue: { language: LANGUAGE } }
//         ]
//       }).compileComponents();
//
//       autocompletionDownloadService = TestBed.get(AirportAutocompletionDownloadService);
//       airportAutocompletionService = TestBed.get(AirportAutocompletionService);
//       httpClient = TestBed.get(HttpClient);
//     });
//
//     it('sends search request with the right letter', () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbP()));
//       const callLetter = 'P';
//       autocompletionDownloadService.getTextFileForLetter(callLetter);
//
//       expect(httpClient.get).toHaveBeenCalledWith(
//         `${document.location.origin}/aria/resources/AIR/${LANGUAGE}/${callLetter}.txt`,
//         { responseType: 'text' }
//       );
//     });
//
//     it('sends only one request for the same letter', () => {
//       // send request once
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbP()));
//       const callLetter = 'P';
//       autocompletionDownloadService.getTextFileForLetter(callLetter);
//
//       expect(httpClient.get).toHaveBeenCalledWith(
//         `${document.location.origin}/aria/resources/AIR/${LANGUAGE}/${callLetter}.txt`,
//         { responseType: 'text' }
//       );
//       expect(httpClient.get).toHaveBeenCalledTimes(1);
//
//       // call with the same letter, should not send request
//       autocompletionDownloadService.getTextFileForLetter(callLetter);
//
//       expect(httpClient.get).not.toHaveBeenCalledTimes(2);
//     });
//
//     it('should return nothing for 2 letters', () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbC()));
//       const callLetter = 'CD';
//       airportAutocompletionService.autocomplete(callLetter).subscribe(res => {
//         expect(res).toEqual([]);
//       });
//     });
//
//     it('parses correctly letters nice', () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbN()));
//       const callLetter = 'nice';
//       airportAutocompletionService.autocomplete(callLetter).subscribe(res => {
//         expect(res).toEqual(mockParsingGbnice().parsing);
//       });
//     });
//
//     it('parses correctly letters par', () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbP()));
//       const callLetter = 'par';
//       airportAutocompletionService.autocomplete(callLetter).subscribe(res => {
//         expect(res).toEqual(mockParsingGbpa().parsing);
//       });
//     });
//
//     it("doesn't send the request when called with empty string or undefined", () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbP()));
//       airportAutocompletionService.autocomplete('');
//       airportAutocompletionService.autocomplete(undefined);
//
//       expect(httpClient.get).not.toHaveBeenCalled();
//     });
//
//     it('returns the exact IATA code match as first result when typing a IATA code', () => {
//       spyOn(httpClient, 'get').and.returnValue(asyncData(mockAutocompletionGbP()));
//       const callLetters = 'PAR';
//       airportAutocompletionService.autocomplete(callLetters).subscribe(res => {
//         expect(res[0].iata).toEqual('PAR');
//         expect(res[0].cityName).toEqual('Paris');
//       });
//     });
//
//     it('sends the request again if the first failed', () => {
//       spyOn(httpClient, 'get').and.returnValue(throwError({}));
//       const letters = 'PARIS';
//
//       airportAutocompletionService.autocomplete(letters);
//       expect(httpClient.get).toHaveBeenCalledTimes(1);
//
//       airportAutocompletionService.autocomplete(letters);
//       expect(httpClient.get).toHaveBeenCalledTimes(2);
//     });
//   });
// }
//
// /** Create async observable that emits-once and completes
//  *  after a JS engine turn */
// export function asyncData<T>(data: T) {
//   return defer(() => Promise.resolve(data));
// }
//
// /** Create async observable error that errors
//  *  after a JS engine turn */
// export function asyncError<T>(errorObject: T) {
//   return defer(() => Promise.reject(errorObject));
// }
