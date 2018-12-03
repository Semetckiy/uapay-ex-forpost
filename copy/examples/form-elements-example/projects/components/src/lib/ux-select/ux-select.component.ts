import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-select',
  templateUrl: './ux-select.component.html',
  styleUrls: ['./ux-select.component.scss']
})
export class UxSelectComponent implements OnInit {

  @Input() entity: EntityObject;
  @Input() attribute;
  @Input() action: string;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

  performAction(selectedValue) {

    let businessLogic = this.engine.businessLogic(this.entity);

    switch (this.action) {

      case 'sort':
        this.entity['optionSelected'] = selectedValue;
        businessLogic.onSort(this.entity);
        break;

      default:
        throw new Error('Action not found');

    }

  }

}
