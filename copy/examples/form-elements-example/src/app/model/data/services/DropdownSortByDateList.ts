import { HttpClient } from '@angular/common/http';

import { XDataServiceMapper } from "@uxdf/ioc-model";
import { DropdownSortByDate } from "../beans/DropdownSortByDate";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";

export class DropdownSortByDateList extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_DROPDOWN_SORT_BY_DATE", "DropdownSortByDate");
  }

  load(): Observable<DropdownSortByDate> {
    return this.http.get('/api/news-sort-date').pipe(map(response => {

      let dropdownSortByDateList = new DropdownSortByDate();

      dropdownSortByDateList.attrs.forEach(x => x.value = response[x.name]);

      console.log('load select options (by date): ', dropdownSortByDateList['options'].value);

      return dropdownSortByDateList;
    }));
  }
}
