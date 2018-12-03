import { Injectable } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { HttpClient } from "@angular/common/http";
import { PageService } from "@uxdf/ioc-engine";
import { Agency_ } from "../../../model/data/services/Agency_";

@Injectable({
  providedIn: 'root'
})
export class AccountAgencyService extends PageService {

  constructor(
    private engine: EngineService,
    private http: HttpClient
  ) {
    super();
    engine.registerMapper(new Agency_(http));
  }

  loadMapper(name) {
    return this.engine.getMapperById(name).load();
  }

}
