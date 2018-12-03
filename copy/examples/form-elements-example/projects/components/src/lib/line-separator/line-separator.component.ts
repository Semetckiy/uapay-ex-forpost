import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-line-separator',
  templateUrl: './line-separator.component.html',
  styleUrls: ['./line-separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LineSeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
