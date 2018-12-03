import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-list-links',
  templateUrl: './ux-list-links.component.html',
  styleUrls: ['./ux-list-links.component.css']
})
export class UxListLinksComponent implements OnInit {

  @Input() footerItems: {};

  constructor(private engine: EngineService) {}

  ngOnInit() {
    // this.footerItems = this.engine.pageService().getFooterItems();
  }

}
