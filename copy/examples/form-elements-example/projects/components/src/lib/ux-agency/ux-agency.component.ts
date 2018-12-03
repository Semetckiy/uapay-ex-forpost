import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-agency',
  templateUrl: './ux-agency.component.html',
  styleUrls: ['./ux-agency.component.scss']
})
export class UxAgencyComponent implements OnInit {

  @Input() entity: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

}
