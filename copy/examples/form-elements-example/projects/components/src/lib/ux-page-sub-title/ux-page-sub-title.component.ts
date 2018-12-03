import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-page-sub-title',
  templateUrl: './ux-page-sub-title.component.html',
  styleUrls: ['./ux-page-sub-title.component.scss']
})
export class UxPageSubTitleComponent implements OnInit {

  @Input() title;
  @Input() description;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
