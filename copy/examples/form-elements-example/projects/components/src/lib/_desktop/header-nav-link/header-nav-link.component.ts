import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-nav-link',
  templateUrl: './header-nav-link.component.html',
  styleUrls: ['./header-nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderNavLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
