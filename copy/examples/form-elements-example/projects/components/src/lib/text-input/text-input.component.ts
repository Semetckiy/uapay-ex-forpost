import {Component, OnInit, Input, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements OnChanges {
  @Input() name: string;
  @Input() invalid: boolean = null;
  @Input() message: string = '';
  @Input() id: string;
  @Input() title: string;
  @Input() formControl: FormControl;

  constructor() { }

  ngOnChanges() {
  }

}
