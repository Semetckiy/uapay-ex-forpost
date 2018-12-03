import { HttpClient } from '@angular/common/http';

import { XDataServiceMapper } from "@uxdf/ioc-model";
import { DropdownSortByCats } from "../beans/DropdownSortByCats";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";

export class DropdownSortByCatsList extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_DROPDOWN_SORT_BY_CATS", "DropdownSortByCats");
  }

  load(): Observable<DropdownSortByCats> {
    return this.http.get('/api/news-sort-cat').pipe(map(response => {

      let dropdownSortByCatsList = new DropdownSortByCats();

      dropdownSortByCatsList.attrs.forEach(x => x.value = response[x.name]);

      console.log('load select options (by cats): ', dropdownSortByCatsList['options'].value);

      return dropdownSortByCatsList;
    }));
  }

}
