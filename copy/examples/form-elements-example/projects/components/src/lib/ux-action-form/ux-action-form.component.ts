import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityObject} from "@uxdf/ioc-model";
import {EngineService} from "@uxdf/ioc-engine";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-ux-action-form',
  templateUrl: './ux-action-form.component.html',
  styleUrls: ['./ux-action-form.component.css']
})
export class UxActionFormComponent implements OnInit {

  @Input() entity: EntityObject;
  @Input() action: string;
  @Input() name: string;
  @Output() onReload = new EventEmitter();

  formGroup: FormGroup;

  constructor(private engine: EngineService) {

  }

  ngOnInit() {
    this.formGroup = this.engine.pageService().createFormGroup(this.name);

    // TODO this.formGroup.valueChanges - do we need business logic on value change or change attributes on value change???
  }

  reload() {
    this.onReload.emit();
  }

  performAction() {
    let businessLogic = this.engine.businessLogic(this.entity);

    if (this.action === 'update') {

      // TODO consider pass object directly or change every attribute on valueChanges of form control
      Object.keys(this.formGroup.value).forEach(name => {
        this.entity[name].value = this.formGroup.value[name];
      });

      // TODO change to observables
      businessLogic.onUpdate(this.entity);
      businessLogic.postUpdate(this.entity);

    } else {
      throw new Error('Action not found');
    }

  }
}
