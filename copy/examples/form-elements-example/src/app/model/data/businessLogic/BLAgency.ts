import { Agency } from "../beans/Agency";
import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BLAgency extends EntityDefaultBusinessLogic<Agency> {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  onUpdate(agency: Agency): boolean {

    console.log('agency onUpdate', agency);

    return EntityBusinessLogic.OK;
  }

}
