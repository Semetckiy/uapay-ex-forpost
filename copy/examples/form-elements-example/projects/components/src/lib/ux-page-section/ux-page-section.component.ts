import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-page-section',
  templateUrl: './ux-page-section.component.html',
  styleUrls: ['./ux-page-section.component.scss']
})
export class UxPageSectionComponent implements OnInit {

  @Input() entity: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {

  }

}
