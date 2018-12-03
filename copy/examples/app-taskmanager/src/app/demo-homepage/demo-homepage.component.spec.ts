import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHomepageComponent } from './demo-homepage.component';
import { ArrowLinkModule, ConfirmAlertModule, FormGroupModule, TileModule } from "@uxdf/p-components";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "../../../../../node_modules/@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppLayoutModule } from "../app-layout.module";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TasksModule } from "../tasks/tasks.module";
import { AppRoutingModule } from "../app-routing.module";

describe('DemoHomepageComponent', () => {
  let component: DemoHomepageComponent;
  let fixture: ComponentFixture<DemoHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      declarations: [ DemoHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
