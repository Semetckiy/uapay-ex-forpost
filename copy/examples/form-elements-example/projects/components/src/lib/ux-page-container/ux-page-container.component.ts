import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-page-container',
  templateUrl: './ux-page-container.component.html',
  styleUrls: ['./ux-page-container.component.scss']
})
export class UxPageContainerComponent implements OnInit {

  @Input() name;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

}
