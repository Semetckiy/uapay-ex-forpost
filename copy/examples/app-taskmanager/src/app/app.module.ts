import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrowLinkModule, ConfirmAlertModule, FormGroupModule, TileModule } from "@uxdf/p-components";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TasksModule } from "./tasks/tasks.module";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { AppLayoutModule } from "./app-layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { DemoHomepageComponent } from "./demo-homepage/demo-homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoHomepageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ConfirmAlertModule,
    NgbAlertModule.forRoot(),
    FormGroupModule,
    AppLayoutModule,
    StoreModule.forRoot({}, { }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TasksModule,
    AppRoutingModule,
    TileModule,
    ArrowLinkModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
