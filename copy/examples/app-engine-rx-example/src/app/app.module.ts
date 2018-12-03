import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {UxComponentsModule} from '@uxdf/ux-components';
import { Page1Component } from './page1/page1.component';
import {RouterModule} from "@angular/router";
import {Page1Service} from "./page1.service";

import {HttpClientModule} from '@angular/common/http';
import {EngineService} from "@uxdf/ioc-engine-rx";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BLUser} from "./model/businessLogic/BLUser";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";


const engineConfig = {
  services: [
    {
      page: Page1Component,
      service: Page1Service,
    },
  ],

  domainDefinition: {
    User: {
      id: {
        type: 'number',
        description: '',
        required: true
      },
      name: {
        type: 'string',
        description: '',
        required: true
      },
      email: {
        type: 'string',
        description: '',
        required: true
      }
    },
  },

  businessLogic: {
    "User": BLUser
  },

  pageData: {
    mainMenu: function() {
      return [{
        title: "Item 1",
      }, {
        title: "Item 2",
      }]
    },
    productName: function() {
      return 'First';
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    UxComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '**',
        component : Page1Component
      }
    ])
  ],
  providers: [
    Page1Service,
    BLUser,
    {
      provide: 'engineConfig',
      useValue: engineConfig
    },
    EngineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
