import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-news-component',
  templateUrl: './ux-news-component.component.html',
  styleUrls: ['./ux-news-component.component.css']
})
export class UxNewsComponentComponent implements OnInit {

  @Input() attribute;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {

  }

}
