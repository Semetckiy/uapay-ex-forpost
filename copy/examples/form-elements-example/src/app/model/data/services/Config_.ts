import { HttpClient } from '@angular/common/http';
import { XDataServiceMapper } from "@uxdf/ioc-model";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { Config } from "../beans/Config";


export class Config_ extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_CONFIG", "Config");
  }

  load(): Observable<Config> {

    return this.http.get('/api/config').pipe(map(response => {

      let config = new Config();
      config.attrs.forEach(x => x.value = response[x.name]);

      return config;
    }));
  }
}
