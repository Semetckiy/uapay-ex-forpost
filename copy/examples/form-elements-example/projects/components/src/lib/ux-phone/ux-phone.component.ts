import {Component, Input, OnInit} from '@angular/core';
import {EntityAttr} from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-phone',
  templateUrl: './ux-phone.component.html',
  styleUrls: ['./ux-phone.component.css']
})
export class UxPhoneComponent implements OnInit {

  @Input() title: string = '';
  @Input() attribute: EntityAttr;

  value: string | number;

  constructor() { }

  ngOnInit() {
  }

}
