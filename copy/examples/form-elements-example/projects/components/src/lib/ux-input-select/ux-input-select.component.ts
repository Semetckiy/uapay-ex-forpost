import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-input-select',
  templateUrl: './ux-input-select.component.html',
  styleUrls: ['./ux-input-select.component.scss']
})
export class UxInputSelectComponent implements OnInit {

  @Input() options;
  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
