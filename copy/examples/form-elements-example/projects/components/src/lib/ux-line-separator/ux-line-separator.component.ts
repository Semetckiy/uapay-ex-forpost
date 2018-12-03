import { Component, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-line-separator',
  templateUrl: './ux-line-separator.component.html',
  styleUrls: ['./ux-line-separator.component.scss']
})
export class UxLineSeparatorComponent implements OnInit {

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
