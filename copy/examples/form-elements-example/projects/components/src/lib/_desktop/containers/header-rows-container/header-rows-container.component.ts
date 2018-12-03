import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-row-container',
  templateUrl: './header-rows-container.component.html',
  styleUrls: ['./header-rows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderRowsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
