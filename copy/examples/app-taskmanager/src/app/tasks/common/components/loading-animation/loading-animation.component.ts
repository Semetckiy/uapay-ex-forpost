import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingAnimationComponent implements OnInit {

  @Input() fill: string = '#005eb8';
  constructor() { }

  ngOnInit() {
  }

}
