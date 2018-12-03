import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from '@uxdf/ioc-engine';

@Component({
  selector: 'lib-ux-news-card-small',
  templateUrl: './ux-news-card-small.component.html',
  styleUrls: ['./ux-news-card-small.component.css']
})
export class UxNewsCardSmallComponent implements OnInit {

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

}
