import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../beans/Config";

@Injectable({
  providedIn: 'root'
})
export class BLConfig extends EntityDefaultBusinessLogic<Config> {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  extends(): this {
    return this;
  }

  check() {
    let error: boolean = false;
    return error;
  }

  onUpdate(config: Config): boolean {
    console.log('config onUpdate', config);
    return EntityBusinessLogic.OK;
  }

}
