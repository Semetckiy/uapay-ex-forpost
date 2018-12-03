import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxFormComponent } from './ux-form.component';

describe('UxFormRowComponent', () => {
  let component: UxFormComponent;
  let fixture: ComponentFixture<UxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
