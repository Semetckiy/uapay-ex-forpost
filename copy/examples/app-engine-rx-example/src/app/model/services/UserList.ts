import { HttpClient } from '@angular/common/http';

import {XDataServiceMapper} from "@uxdf/ioc-model";
import {User} from "../beans/User";
import {ReplaySubject} from "rxjs";
import {filter, map, switchMap} from "rxjs/internal/operators";
import {EngineService} from "@uxdf/ioc-engine-rx";

export class UserList extends XDataServiceMapper {

  constructor(
    private engine: EngineService,
    private http: HttpClient
  ) {
    super("userList", "User");

    this.store = new ReplaySubject<User>(1);

    this.engine.actions.asObservable().pipe(

      filter(action => action === 'INIT'),

      switchMap(() => this.http.get('/api/user-list').pipe(
        map((response: any[]) => response.map(row => new User().populate(row)))
      ))
    ).subscribe(bean => this.store.next(bean));
  }
}
