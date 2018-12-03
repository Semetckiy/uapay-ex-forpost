import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  @Output() onReload = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reload() {
    this.onReload.emit();
  }

  submit() {
    this.onSubmit.emit();
  }

}
