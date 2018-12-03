import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";

@Component({
  selector: 'lib-ux-news-sort-panel',
  templateUrl: './ux-news-sort-panel.component.html',
  styleUrls: ['./ux-news-sort-panel.component.scss']
})
export class UxNewsSortPanelComponent implements OnInit {

  @Input() entity: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {

  }

}
