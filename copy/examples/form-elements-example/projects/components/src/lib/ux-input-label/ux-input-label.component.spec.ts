import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxInputLabelComponent } from './ux-input-label.component';

describe('UxInputLabelComponent', () => {
  let component: UxInputLabelComponent;
  let fixture: ComponentFixture<UxInputLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxInputLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxInputLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
