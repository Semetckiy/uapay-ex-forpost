import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxInputButtonComponent } from './ux-input-button.component';

describe('UxInputButtonComponent', () => {
  let component: UxInputButtonComponent;
  let fixture: ComponentFixture<UxInputButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxInputButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
