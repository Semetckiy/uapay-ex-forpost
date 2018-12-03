import { HttpClient } from '@angular/common/http';

import { XDataServiceMapper } from "@uxdf/ioc-model";
import { News } from "../beans/News";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";

export class NewsList extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_NEWS_LIST", "News");
  }

  load(): Observable<News> {
    return this.http.get('/api/getNews').pipe(map(response => {

      let newsList = new News();

      newsList.attrs.forEach(x => x.value = response[x.name]);

      console.log('load news: ', newsList['list'].value);

      return newsList;
    }));
  }
}
