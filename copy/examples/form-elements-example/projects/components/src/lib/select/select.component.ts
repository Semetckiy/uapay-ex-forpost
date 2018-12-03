import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SelectComponent implements OnInit {

  @Output() onChange = new EventEmitter();

  @Input() options;

  constructor() { }

  ngOnInit() { }

  test() {
    console.log('action triggered');
  }

  change() {
    this.onChange.emit();
  }

}
