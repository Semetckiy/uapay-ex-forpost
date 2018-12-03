import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxInputSelectComponent } from './ux-input-select.component';

describe('UxInputSelectComponent', () => {
  let component: UxInputSelectComponent;
  let fixture: ComponentFixture<UxInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxInputSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
