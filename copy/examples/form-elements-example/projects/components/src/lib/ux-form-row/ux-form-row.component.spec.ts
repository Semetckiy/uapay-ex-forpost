import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxFormRowComponent } from './ux-form-row.component';

describe('UxFormRowComponent', () => {
  let component: UxFormRowComponent;
  let fixture: ComponentFixture<UxFormRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxFormRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxFormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
