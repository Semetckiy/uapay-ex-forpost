import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxActionFormComponent } from './ux-action-form.component';

describe('UxFormRowComponent', () => {
  let component: UxActionFormComponent;
  let fixture: ComponentFixture<UxActionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxActionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
