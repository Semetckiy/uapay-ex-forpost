import { Component, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";
import { EntityObject } from "@uxdf/ioc-model";
import { AppService } from "./service/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config: EntityObject;

  constructor(
    private engine: EngineService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.appService.load().subscribe(config => {
      this.config = config;
    });
  }

}
