import { HttpClient } from '@angular/common/http';

import {XDataServiceMapper} from "@uxdf/ioc-model";
import {User} from "../beans/User";
import {ReplaySubject} from "rxjs";
import {filter, map, switchMap} from "rxjs/internal/operators";
import {EngineService} from "@uxdf/ioc-engine-rx";

// TODO Rename data service mapper to data service store
export class User001 extends XDataServiceMapper {

  constructor(
    private engine: EngineService,
    private http: HttpClient
  ) {
    super("user", "User");

    this.store = new ReplaySubject<User>(1);

    this.engine.actions.asObservable().pipe(

      filter(action => action === 'INIT' || action === 'RELOAD'),

      switchMap(() => this.http.get('/api/profile').pipe(
        // TODO Beans as plain objects + ER graph separate object
        // TODO we dont need to populate
        map(response => new User().populate(response))
      ))
    ).subscribe(bean => this.store.next(bean)); // TODO 4. Format and send response to user
  }
}
