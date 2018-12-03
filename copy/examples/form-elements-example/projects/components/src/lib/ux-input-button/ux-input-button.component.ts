import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-input-button',
  templateUrl: './ux-input-button.component.html',
  styleUrls: ['./ux-input-button.component.scss']
})
export class UxInputButtonComponent implements OnInit {

  @Input() label;
  @Input() type;
  @Input() enabled;
  @Input() required;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
