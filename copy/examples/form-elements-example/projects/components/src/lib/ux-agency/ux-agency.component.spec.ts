import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxAgencyComponent } from './ux-agency.component';

describe('UxAgencyComponent', () => {
  let component: UxAgencyComponent;
  let fixture: ComponentFixture<UxAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
