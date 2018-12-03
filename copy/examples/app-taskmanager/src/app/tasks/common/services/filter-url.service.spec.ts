import { TestBed } from '@angular/core/testing';

import { FilterUrlService } from './filter-url.service';
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { convertToParamMap } from "@angular/router";
import { TasksFilter } from "../models";

describe('FilterUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: NgbDateParserFormatter, useValue: {
        format: () => 'formatted',
        parse: () => 'parsed'
      }}
    ]
  }));

  it('should be created', () => {
    const service: FilterUrlService = TestBed.get(FilterUrlService);
    expect(service).toBeTruthy();
  });

  describe('fromQuery', () => {
    it('parse query', () => {
      const service: FilterUrlService = TestBed.get(FilterUrlService);
      expect(service.fromQuery(convertToParamMap({
        filterFromDueDate: '',
        filterToDueDate: '',
        filterTitle: 'some title'
      }))).toEqual(<TasksFilter>{
        filterFromDueDate: 'parsed',
        filterToDueDate: 'parsed',
        filterTitle: 'some title'
      });
    });

    it('should sanitize no filter params', () => {
      const service: FilterUrlService = TestBed.get(FilterUrlService);
      expect(service.fromQuery(convertToParamMap({
        filterFromDueDate: '',
        filterToDueDate: '',
        thisIsNoFilter: '',
        filterTitle: 'some title'
      }))).toEqual(<TasksFilter>{
        filterFromDueDate: 'parsed',
        filterToDueDate: 'parsed',
        filterTitle: 'some title'
      });
    });
  });

  describe('toQuery', () => {
    it('format query', () => {
      const service: FilterUrlService = TestBed.get(FilterUrlService);
      expect(service.toQuery(<TasksFilter>{
        filterFromDueDate: '',
        filterToDueDate: '',
        filterTitle: 'some title'
      })).toEqual({
        filterFromDueDate: 'formatted',
        filterToDueDate: 'formatted',
        filterTitle: 'some title'
      });
    });
  })
});
