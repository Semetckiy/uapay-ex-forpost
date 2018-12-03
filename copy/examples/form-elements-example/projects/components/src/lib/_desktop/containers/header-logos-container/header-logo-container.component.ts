import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-logo-container',
  templateUrl: './header-logo-container.component.html',
  styleUrls: ['./header-logo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderLogoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
