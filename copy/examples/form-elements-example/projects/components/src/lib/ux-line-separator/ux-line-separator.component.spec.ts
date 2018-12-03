import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxLineSeparatorComponent } from './ux-line-separator.component';

describe('UxLineSeparatorComponent', () => {
  let component: UxLineSeparatorComponent;
  let fixture: ComponentFixture<UxLineSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxLineSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxLineSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
