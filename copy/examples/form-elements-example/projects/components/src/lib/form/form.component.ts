import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  submit() {
    this.onSubmit.emit();
  }

}
