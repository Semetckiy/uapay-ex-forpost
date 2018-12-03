import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavBarComponent implements OnInit {

  @Input() header;

  constructor() { }

  ngOnInit() { }

  test() {
    console.log(this.header);
  }

}
