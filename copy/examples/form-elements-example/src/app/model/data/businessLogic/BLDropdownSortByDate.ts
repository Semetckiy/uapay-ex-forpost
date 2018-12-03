import { DropdownSortByDate } from "../beans/DropdownSortByDate";
import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {DropdownSortByCats} from "../beans/DropdownSortByCats";
import { Utils } from "./Utils";

@Injectable({
  providedIn: 'root'
})

export class BLDropdownSortByDate extends EntityDefaultBusinessLogic<DropdownSortByDate> {

  url = {
    'getNews': '/api/getSortedNews'
  };

  filter = {
    categoryId: -1,
    sortBy: '',
    searchKey: '',
    start: 0,
    end: 8
  };

  constructor(
    private http: HttpClient,
    private utils: Utils
  ) {
    super();
  }

  extends(): this {
    return this;
  }

  onLoad(_dropdownSortByDate: DropdownSortByDate) {
    console.log('[dropdownSortByDate] onLoad: ', _dropdownSortByDate);

    this.http.get('/api/news-sort-date')
      .subscribe(x => {
        console.log('GET /api/news-sort-date:', x);
      });

    return EntityBusinessLogic.OK;

  }

  onSort(sortByCats: DropdownSortByCats) {

    this.filter.sortBy = sortByCats['optionSelected'];

    const url = this.url.getNews;
    const params = this.utils.setParams(this.filter);

    this.http.get(url, { params })
      .subscribe(x => {
        console.log('load sorted news (by date):', x['list']);
      });

    return EntityBusinessLogic.OK;

  }

}
