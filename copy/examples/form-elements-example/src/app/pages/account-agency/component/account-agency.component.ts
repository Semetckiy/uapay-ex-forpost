import { Component, OnInit } from '@angular/core';
import { EntityObject } from "@uxdf/ioc-model";
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'app-page-agency',
  templateUrl: './account-agency.component.html',
  styleUrls: ['./account-agency.component.css']
})
export class AccountAgencyComponent implements OnInit {

  agency: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {
    this.loadAgency();
  }

  loadAgency() {
    this.engine.pageService().loadMapper('GET_USER_AGENCY').subscribe(agency => {
      this.agency = agency;
    });
  }

}
