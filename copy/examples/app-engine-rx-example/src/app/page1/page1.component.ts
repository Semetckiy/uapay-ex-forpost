import { Component, OnInit } from '@angular/core';
import {EngineService} from "@uxdf/ioc-engine-rx";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private engine: EngineService) { }

  ngOnInit() {
    // TODO remove (see 5-tuple)
    // TODO Get rid of page services
    this.engine.pageService().init();
  }
}
