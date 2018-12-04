import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFeature from './redux/reducers/index';
import { reducers, metaReducers } from './root.reducers';
import { LoginEffects } from './redux/effects/login.effects';

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationComponent } from './authentication/component/authentication.component';
import { AuthenticationConnectFormDirective } from './authentication/directive/authentication-connect-form.directive';

import { AuthenticationValidators } from './authentication/validator/authentication-validators';


@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationConnectFormDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forFeature('app', fromFeature.reducers),
    EffectsModule.forRoot([LoginEffects]),
    AppRoutingModule
  ],
  providers: [
    AuthenticationValidators
  ],
  bootstrap: [AuthenticationComponent]
})

export class AppModule {

  constructor(private store: Store<any>) { }

}
