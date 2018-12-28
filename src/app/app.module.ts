import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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

import { TlComponent } from './pages/transaction-log/components/index/tl.component';

import { NavPanelComponent } from './pages/cash-book/components/nav-panel/nav-panel.component';
import { PkoComponent } from './pages/cash-book/components/pko/pko.component';
import { RkoComponent } from './pages/cash-book/components/rko/rko.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AuthenticationComponent,
    LayoutComponent,
    HeaderComponent,
    DeviceRroComponent,
    PaComponent,
    PaCreateComponent,
    TlComponent,
    NavPanelComponent,
    PkoComponent,
    RkoComponent
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
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    PerfectScrollbarModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthenticationValidators,
    AuthenticationService,
    StoreService
  ],
  bootstrap: [LayoutComponent]
})

export class AppModule {

  constructor() { }

}
