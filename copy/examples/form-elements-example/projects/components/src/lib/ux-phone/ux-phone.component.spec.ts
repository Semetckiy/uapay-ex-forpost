import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPhoneComponent } from './ux-phone.component';

describe('UxPhoneComponent', () => {
  let component: UxPhoneComponent;
  let fixture: ComponentFixture<UxPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
