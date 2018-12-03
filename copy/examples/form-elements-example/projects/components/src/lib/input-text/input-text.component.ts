import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputTextComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor() { }

  ngOnInit() { }

}
