import { News } from "../beans/News";
import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BLNewsList extends EntityDefaultBusinessLogic<News> {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  extends(): this {
    return this;
  }

  onLoad(newsList: News) {
    console.log('[news] onLoad: ', newsList);

    this.http.get('/api/getNews')
      .subscribe(x => {
        console.log('GET /api/getNews:', x);
      });

    return EntityBusinessLogic.OK;

  }

}
