import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupDirective } from '@angular/forms';
import { debounceTime, take } from 'rxjs/internal/operators';
import { getLoginState, State } from '../../redux/index';
import { Subscription } from 'rxjs/index';
import { UpdateLoginFields} from '../../redux/actions/login.actions';

@Directive({
  selector: '[appConnectLoginForm]'
})
export class AuthenticationConnectFormDirective implements OnInit, OnDestroy {

  @Input() debounce = 300;
  formChange: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(getLoginState),
      take(1)
    ).subscribe(formValue => {
      this.formGroupDirective.form.patchValue(formValue.fields);
    });

    this.formChange = this.formGroupDirective.form.valueChanges
      .pipe(debounceTime(this.debounce))
      .subscribe(value => {
        this.store.dispatch(new UpdateLoginFields(value));
      });
  }

  ngOnDestroy() {
    this.formChange.unsubscribe();
  }
}
