import { TestBed } from '@angular/core/testing';

import { SortUrlService } from './sort-url.service';
import { convertToParamMap } from "@angular/router";

describe('SortUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortUrlService = TestBed.get(SortUrlService);
    expect(service).toBeTruthy();
  });

  describe('fromQuery', () => {

    it('should parse the query and return sortDescending true', () => {
      const service: SortUrlService = TestBed.get(SortUrlService);
      expect(service.fromQuery(convertToParamMap({sortColumn: 'unit-test', sortDescending: 'true'})))
        .toEqual({sortColumn: 'unit-test', sortDescending: true});
    });

    it('should parse the query and return sortDescending false', () => {
      const service: SortUrlService = TestBed.get(SortUrlService);
      expect(service.fromQuery(convertToParamMap({sortColumn: 'unit-test', sortDescending: 'false'})))
        .toEqual({sortColumn: 'unit-test', sortDescending: false});
    });

    it('should parse the query and return sortDescending null', () => {
      const service: SortUrlService = TestBed.get(SortUrlService);
      expect(service.fromQuery(convertToParamMap({sortColumn: 'unit-test'})))
        .toEqual({sortColumn: 'unit-test', sortDescending: null});
    });

  });

  describe('toQuery', () => {

    it('should format searchsettings', () => {
      const service: SortUrlService = TestBed.get(SortUrlService);
      expect(service.toQuery({sortColumn: 'unit-test', sortDescending: true}))
        .toEqual({sortColumn: 'unit-test', sortDescending: 'true'});
    });

  });

});
