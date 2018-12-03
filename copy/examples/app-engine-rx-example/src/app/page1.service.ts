import { Injectable } from '@angular/core';
import {User001} from "./model/services/User0001";
import {EngineService} from "@uxdf/ioc-engine-rx";
import {HttpClient} from "@angular/common/http";
import {PageService} from "@uxdf/ioc-engine-rx";
import {UserList} from "./model/services/UserList";

@Injectable({
  providedIn: 'root'
})
export class Page1Service extends PageService {

  constructor(private engine: EngineService, private http: HttpClient) {
    super();
    // TODO Get rid of page services
    engine.registerMapper(new User001(engine, http));
    engine.registerMapper(new UserList(engine, http));
  }

  init() {
    this.engine.actions.next('INIT');
  }

}
