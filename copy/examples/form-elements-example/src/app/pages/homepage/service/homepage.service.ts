import { Injectable } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { HttpClient } from "@angular/common/http";
import { PageService } from "@uxdf/ioc-engine";

@Injectable({
  providedIn: 'root'
})
export class HomepageService extends PageService {

  constructor(
    private engine: EngineService,
    private http: HttpClient
  ) {
    super();
  }

}
