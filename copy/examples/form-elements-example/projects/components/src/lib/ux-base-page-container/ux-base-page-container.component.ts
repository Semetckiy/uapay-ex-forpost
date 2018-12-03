import { Component, Input, OnInit } from '@angular/core';
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-base-page-contaiter',
  templateUrl: './ux-base-page-container.component.html',
  styleUrls: ['./ux-base-page-container.component.scss']
})
export class UxBasePageContainerComponent implements OnInit {

  @Input() entity: EntityObject;

  constructor() { }

  ngOnInit() { }

}
