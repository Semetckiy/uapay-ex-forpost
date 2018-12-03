import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputLabelComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() placeholder;
  @Input() description;
  @Input() enabled;
  @Input() required;

  constructor() { }

  ngOnInit() { }

}
