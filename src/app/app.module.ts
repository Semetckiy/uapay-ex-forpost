import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

import { reducers, metaReducers } from './root.reducers';

import * as fromFeature from './redux/index';
import { LoginEffects } from './redux/effects/login.effects';

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationComponent } from './authentication/component/authentication.component';
import { AuthenticationConnectFormDirective } from './authentication/directive/authentication-connect-form.directive';
import { AuthenticationValidators } from './authentication/validator/authentication-validators';

import { LoginService } from './redux/services/login.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationConnectFormDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    AuthenticationValidators,
    LoginService
  ],
  bootstrap: [AuthenticationComponent]
})

export class AppModule {

  constructor(private store: Store<any>) { }

}
