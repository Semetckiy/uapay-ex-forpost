import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-input-text',
  templateUrl: './ux-input-text.component.html',
  styleUrls: ['./ux-input-text.component.scss']
})
export class UxInputTextComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
