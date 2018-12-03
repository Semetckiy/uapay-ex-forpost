import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-profile',
  templateUrl: './ux-profile.component.html',
  styleUrls: ['./ux-profile.component.scss']
})
export class UxProfileComponent implements OnInit {

  @Input() entity: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

}
