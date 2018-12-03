import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputSelectComponent implements OnInit {

  @Input() options;
  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor() { }

  ngOnInit() { }

}
