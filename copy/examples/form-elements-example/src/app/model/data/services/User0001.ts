import { HttpClient } from '@angular/common/http';

import {XDataServiceMapper, XM_ModelLoader} from "@uxdf/ioc-model";
import {User} from "../beans/User";
import {Observable} from "rxjs";
import {map} from "rxjs/internal/operators";

// TODO Implement later
export class User001 extends XDataServiceMapper {
  constructor(
    private http: HttpClient
  ) { super("GET_PROFILE", "User"); }

  load(): Observable<User> {
    // TODO Call service for User data, then populate bean, then return it
    return this.http.get('/api/profile').pipe(map(response => {
      let user = new User();

      // TODO question : which method for populate data to use?
      user.attrs.forEach(x => x.value = response[x.name]);

      return user;
    }));
  }
}
