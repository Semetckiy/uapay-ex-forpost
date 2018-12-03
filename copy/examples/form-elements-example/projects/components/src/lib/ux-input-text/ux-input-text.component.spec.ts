import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxInputTextComponent } from './ux-input-text.component';

describe('UxInputButtonComponent', () => {
  let component: UxInputTextComponent;
  let fixture: ComponentFixture<UxInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
