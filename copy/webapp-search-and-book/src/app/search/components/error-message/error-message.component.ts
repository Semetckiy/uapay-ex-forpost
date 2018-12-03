import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../reducers/results.reducer';
import {ClearError} from '../../actions/results.actions';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onClose() {
    this.store.dispatch(new ClearError());
  }
}
