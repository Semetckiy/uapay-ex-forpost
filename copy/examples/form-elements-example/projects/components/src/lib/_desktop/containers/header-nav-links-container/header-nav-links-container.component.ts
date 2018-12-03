import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-nav-links-container',
  templateUrl: './header-nav-links-container.component.html',
  styleUrls: ['./header-nav-links-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderNavLinksContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
