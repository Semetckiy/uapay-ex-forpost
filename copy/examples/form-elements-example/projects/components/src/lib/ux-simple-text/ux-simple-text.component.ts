import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EntityAttr} from "@uxdf/ioc-model";
import {EngineService} from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-simple-text',
  templateUrl: './ux-simple-text.component.html',
  styleUrls: ['./ux-simple-text.component.css']
})
export class UxSimpleTextComponent implements OnChanges {

  @Input() attribute: EntityAttr;
  @Input() formName: string;
  @Input() title: string = '';

  formControl: FormControl;
  id: string;


  constructor(private engine: EngineService) {}

  ngOnChanges() {
    this.reload();


  }

  reload() {
    this.id = this.attribute.name;
    const pageService = this.engine.pageService();
    // TODO Question: import required - from where ?
    this.formControl = pageService.createFormControl(this.formName, this.attribute.name, this.attribute.value, true);
  }

  get invalid(): boolean {
    return this.formControl.invalid;
  }

  get message(): string {
    if (!this.formControl.errors) {
      return '';
    }
    return this.formControl.errors.required ? 'Field is required' : '';
  }


}
