import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxSelectComponent } from './ux-select.component';

describe('UxSelectComponent', () => {
  let component: UxSelectComponent;
  let fixture: ComponentFixture<UxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
