import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-news-card-small',
  templateUrl: './news-card-small.component.html',
  styleUrls: ['./news-card-small.component.css']
})
export class NewsCardSmallComponent implements OnInit {

  @Input() card: {};

  constructor() { }

  ngOnInit() { }

}
