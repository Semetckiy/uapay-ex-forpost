import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import { Observable } from "rxjs/index";
import { Config } from "../../../model/data/beans/Config";

@Injectable({
  providedIn: 'root'
})
export class AppService  {

  constructor(
    private http: HttpClient
  ) { }

  load(): Observable<Config> {

    return this.http.get('/api/config').pipe(map(response => {

      let config = new Config();
      config.attrs.forEach(x => x.value = response[x.name]);

      return config;
    }));
  }

}
