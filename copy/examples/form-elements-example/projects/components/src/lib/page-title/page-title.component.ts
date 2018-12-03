import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PageTitleComponent implements OnInit {

  @Input() title;
  @Input() description;

  constructor() { }

  ngOnInit() { }

}