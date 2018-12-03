import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasePageComponent implements OnInit {

  @Input() config;

  constructor() { }

  ngOnInit() { }

}
