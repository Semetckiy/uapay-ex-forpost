import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-input-label',
  templateUrl: './ux-input-label.component.html',
  styleUrls: ['./ux-input-label.component.scss']
})
export class UxInputLabelComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
