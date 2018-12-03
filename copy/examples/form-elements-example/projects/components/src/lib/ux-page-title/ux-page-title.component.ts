import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-page-title',
  templateUrl: './ux-page-title.component.html',
  styleUrls: ['./ux-page-title.component.scss']
})
export class UxPageTitleComponent implements OnInit {

  @Input() title;
  @Input() description;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
