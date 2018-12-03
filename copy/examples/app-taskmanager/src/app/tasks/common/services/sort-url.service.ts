import { Injectable } from '@angular/core';
import { SortSettings } from "../models/index";
import { ParamMap } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SortUrlService {

  constructor() { }

  fromQuery(paramMap: ParamMap): SortSettings {
    let sortDescending;

    if(paramMap.get('sortDescending') === null){
      sortDescending = null;
    } else {
      sortDescending = (paramMap.get('sortDescending').toLowerCase() === 'true');
    }

    return {
      sortColumn: paramMap.get('sortColumn'),
      sortDescending
    };
  }

  toQuery({sortColumn, sortDescending}: SortSettings): any{
    return {
      sortColumn,
      sortDescending: sortDescending === null ? '' : String(sortDescending)
    };
  }
}
