import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityObject } from "@uxdf/ioc-model";
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-form',
  templateUrl: './ux-form.component.html',
  styleUrls: ['./ux-form.component.scss']
})
export class UxFormComponent implements OnInit {

  @Input() entity: EntityObject;
  @Input() action: string;
  @Input() name: string;
  @Output() onSubmit = new EventEmitter();

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

  performAction() {

    let businessLogic = this.engine.businessLogic(this.entity);

    if (this.action === 'update') {

      businessLogic.onUpdate(this.entity);

    } else {
      throw new Error('Action not found');
    }

  }

}
