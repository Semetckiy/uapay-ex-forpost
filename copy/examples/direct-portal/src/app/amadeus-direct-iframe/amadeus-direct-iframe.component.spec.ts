import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusDirectIframeComponent } from './amadeus-direct-iframe.component';

describe('AmadeusDirectIframeComponent', () => {
  let component: AmadeusDirectIframeComponent;
  let fixture: ComponentFixture<AmadeusDirectIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusDirectIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusDirectIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
