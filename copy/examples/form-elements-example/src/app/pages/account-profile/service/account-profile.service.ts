import { Injectable } from '@angular/core';
import { User001 } from '../../../model/data/services/User0001';
import { EngineService } from "@uxdf/ioc-engine";
import { HttpClient } from "@angular/common/http";
import { PageService } from "@uxdf/ioc-engine";
import { filter, debounceTime, switchMap } from "rxjs/internal/operators";
import { Profile_ } from "../../../model/data/services/Profile_";

@Injectable({
  providedIn: 'root'
})
export class AccountProfileService extends PageService {

  constructor(private engine: EngineService, private http: HttpClient) {
    super();
    engine.registerMapper(new User001(http));
    engine.registerMapper(new Profile_(http));
  }

  loadMapper(name) {
    return this.engine.getMapperById(name).load();
  }

}
