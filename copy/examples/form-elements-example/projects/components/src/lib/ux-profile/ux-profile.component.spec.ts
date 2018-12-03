import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxProfileComponent } from './ux-profile.component';

describe('UxAgencyComponent', () => {
  let component: UxProfileComponent;
  let fixture: ComponentFixture<UxProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
