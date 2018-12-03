import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-page-sub-title',
  templateUrl: './page-sub-title.component.html',
  styleUrls: ['./page-sub-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PageSubTitleComponent implements OnInit {

  @Input() title;
  @Input() description;

  constructor() { }

  ngOnInit() { }

}
