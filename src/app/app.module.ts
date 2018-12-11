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
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { StoreService } from './shared/store.service';

import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/header/header.component';

import { AuthenticationComponent } from './pages/authentication/component/authentication.component';
import { AuthenticationValidators } from './pages/authentication/validator/authentication-validators';
import { AuthenticationService } from './pages/authentication/services/authentication.service';

import { DeviceRroComponent } from './pages/device-rro/device-rro.component';

import { PaComponent } from './pages/payment-acceptance/component/index/pa.component';
import { PaCreateComponent } from './pages/payment-acceptance/component/create/pa-create.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LayoutComponent,
    HeaderComponent,
    DeviceRroComponent,
    PaComponent,
    PaCreateComponent
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
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationValidators,
    AuthenticationService,
    StoreService
  ],
  bootstrap: [LayoutComponent]
})

export class AppModule {

  constructor() { }

}
