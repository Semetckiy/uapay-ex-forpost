import { Component, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-form-row',
  templateUrl: './ux-form-row.component.html',
  styleUrls: ['./ux-form-row.component.scss']
})
export class UxFormRowComponent implements OnInit {

  constructor(private engine: EngineService) { }

  ngOnInit() { }

}
