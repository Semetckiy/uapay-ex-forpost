import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-nav-bar-account',
  templateUrl: './nav-bar-account.component.html',
  styleUrls: ['./nav-bar-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavBarAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
