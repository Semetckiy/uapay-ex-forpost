import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-nav-bar',
  templateUrl: './ux-nav-bar.component.html',
  styleUrls: ['./ux-nav-bar.component.css']
})
export class UxNavBarComponent implements OnInit {

  @Input() attribute;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
