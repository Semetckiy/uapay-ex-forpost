import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-nav-bar-account',
  templateUrl: './ux-nav-bar-account.component.html',
  styleUrls: ['./ux-nav-bar-account.component.scss']
})
export class UxNavBarAccountComponent implements OnInit {

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
