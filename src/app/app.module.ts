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

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationComponent } from './authentication/component/authentication.component';
import { AuthenticationValidators } from './authentication/validator/authentication-validators';
import { AuthenticationService } from './authentication/services/authentication.service';

import { LayoutComponent } from './pages/_layout/layout.component';

import { DeviceRroComponent } from './pages/device-rro/device-rro.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LayoutComponent,
    DeviceRroComponent
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
    AppRoutingModule
  ],
  providers: [
    AuthenticationValidators,
    AuthenticationService
  ],
  bootstrap: [AuthenticationComponent]
})

export class AppModule {

  constructor() { }

}
