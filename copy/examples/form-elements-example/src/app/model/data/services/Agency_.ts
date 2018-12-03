import { HttpClient } from '@angular/common/http';
import { XDataServiceMapper } from "@uxdf/ioc-model";
import { Agency } from "../beans/Agency";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";


export class Agency_ extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_USER_AGENCY", "Agency");
  }

  load(): Observable<Agency> {

    return this.http.get('/api/agency').pipe(map(response => {

      let agency = new Agency();
      agency.attrs.forEach(x => x.value = response[x.name]);

      return agency;
    }));
  }
}
