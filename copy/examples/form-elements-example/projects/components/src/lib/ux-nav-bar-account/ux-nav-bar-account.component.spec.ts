import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxNavBarAccountComponent } from './ux-nav-bar-account.component';

describe('UxAgencyComponent', () => {
  let component: UxNavBarAccountComponent;
  let fixture: ComponentFixture<UxNavBarAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxNavBarAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxNavBarAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
