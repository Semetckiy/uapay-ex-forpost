import { Component, OnInit } from '@angular/core';
import {EngineService} from "@uxdf/ioc-engine";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-ux-page',
  templateUrl: './ux-page.component.html',
  styleUrls: ['./ux-page.component.scss']
})
export class UxPageComponent implements OnInit {


  constructor(private engine: EngineService) { }

  ngOnInit() {
  }

}
