import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
