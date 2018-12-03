import { Component, Input, OnInit } from '@angular/core';
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'lib-ux-footer',
  templateUrl: './ux-footer.component.html',
  styleUrls: ['./ux-footer.component.css']
})
export class UxFooterComponent implements OnInit {

  @Input() attribute;

  constructor(private engine: EngineService) {}

  ngOnInit() { }

}
