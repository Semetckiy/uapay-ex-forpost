import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-heading-panel',
  templateUrl: './heading-panel.component.html',
  styleUrls: ['./heading-panel.component.css']
})
export class HeadingPanelComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
