import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponentComponent implements OnInit {

  @Input() cards;

  constructor() { }

  ngOnInit() { }

}
