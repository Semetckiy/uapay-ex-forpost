import { Component, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'app-page-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() { }

}
