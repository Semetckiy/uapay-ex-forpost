import {ChangeDetectionStrategy, Component, OnInit, ViewChild, TemplateRef, Input} from '@angular/core';

@Component({
  selector: 'lib-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PageContainerComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() { };


}
