import { DropdownSortByCats } from "../beans/DropdownSortByCats";
import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Utils } from "./Utils";
import {News} from "../beans/News";

@Injectable({
  providedIn: 'root'
})

export class BLDropdownSortByCats extends EntityDefaultBusinessLogic<DropdownSortByCats> {

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

  onLoad(_dropdownSortByCats: DropdownSortByCats) {
    console.log('[dropdownSortByCats] onLoad: ', _dropdownSortByCats);

    this.http.get('/api/news-sort-cat')
      .subscribe(x => {
        console.log('GET /api/news-sort-cat:', x);
      });

    return EntityBusinessLogic.OK;

  }

  onSort(sortByCats: DropdownSortByCats) {

    this.filter.sortBy = sortByCats['optionSelected'];

    const url = this.url.getNews;
    const params = this.utils.setParams(this.filter);

    this.http.get(url, { params })
      .subscribe(x => {
        console.log('load sorted news (by cats):', x['list']);
      });

    return EntityBusinessLogic.OK;

  }

}
