import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputButtonComponent implements OnInit {

  @Input() label;
  @Input() type;
  @Input() enabled;
  @Input() required;

  constructor() { }

  ngOnInit() { }

}
