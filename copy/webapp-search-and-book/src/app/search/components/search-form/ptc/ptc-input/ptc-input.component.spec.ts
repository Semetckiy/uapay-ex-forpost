import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcInputComponent } from './ptc-input.component';

describe('PtcInputComponent', () => {
  let component: PtcInputComponent;
  let fixture: ComponentFixture<PtcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
