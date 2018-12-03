import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxNavBarComponent } from './ux-nav-bar.component';

describe('UxAgencyComponent', () => {
  let component: UxNavBarComponent;
  let fixture: ComponentFixture<UxNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
