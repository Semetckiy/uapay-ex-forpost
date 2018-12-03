import { HttpClient } from '@angular/common/http';
import { XDataServiceMapper } from "@uxdf/ioc-model";
import { Profile } from "../beans/Profile";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";


export class Profile_ extends XDataServiceMapper {

  constructor(
    private http: HttpClient
  ) {
    super("GET_USER_PROFILE", "Profile");
  }

  load(): Observable<Profile> {

    return this.http.get('/api/profile').pipe(map(response => {

      let profile = new Profile();
      profile.attrs.forEach(x => x.value = response[x.name]);

      return profile;
    }));
  }
}
