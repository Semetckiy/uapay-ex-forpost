import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State as loginState } from '../../redux/reducers/login.reducer';
import * as rootReducers from '../../redux/reducers/index';
import { AuthenticationValidators } from '../validator/authentication-validators';


@Component({
  selector: 'app-root',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit, OnDestroy {

  login$: Observable<loginState>;
  subscription: Subscription;

  formGroup: FormGroup;
  companyName = 'UAPAY';
  hide = true;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) {
    this.login$ = store.pipe(select(rootReducers.getLoginState));
  }

  ngOnInit() {
    this.createFormGroup();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createFormGroup() {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  private submit() {

  }

  test(state) {
    console.log('state: ', state);
  }

}
