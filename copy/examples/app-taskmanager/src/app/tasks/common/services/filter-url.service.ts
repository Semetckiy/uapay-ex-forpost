import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { TasksFilter } from "../models/index";
import { ParamMap } from "@angular/router";
import { initialState as defaultFilter } from './../../tasks-search/reducers/task-search-filter.reducer';


@Injectable({
  providedIn: 'root'
})
export class FilterUrlService {

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) { }

  private sanitize(paramMap: ParamMap): any {
    return Object.keys(defaultFilter).reduce((acc, key) => {
      if(paramMap.has(key)){
        acc[key] = paramMap.get(key);
      }
      return acc;
    }, {});
  }

  private parse(obj: TasksFilter): TasksFilter {
    let query = {...obj};
    if(query.hasOwnProperty('filterToDueDate')){
      query.filterToDueDate = this.ngbDateParserFormatter.parse(<string> obj.filterToDueDate)
    }
    if(query.hasOwnProperty('filterFromDueDate')){
      query.filterFromDueDate = this.ngbDateParserFormatter.parse(<string> obj.filterFromDueDate)
    }
    return query
  }

  fromQuery(paramMap: ParamMap): TasksFilter {
    return this.parse(this.sanitize(paramMap));
  }

  toQuery(filter: TasksFilter): any{
    let query = {...filter};
    if(query.hasOwnProperty('filterToDueDate')){
      query.filterToDueDate = <string> this.ngbDateParserFormatter.format(<NgbDateStruct> filter.filterToDueDate)
    }
    if(query.hasOwnProperty('filterFromDueDate')){
      query.filterFromDueDate = <string> this.ngbDateParserFormatter.format(<NgbDateStruct> filter.filterFromDueDate)
    }
    return query;
  }
}
