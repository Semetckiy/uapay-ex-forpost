import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxSimpleTextComponent } from './ux-simple-text.component';

describe('UxSimpleTextComponent', () => {
  let component: UxSimpleTextComponent;
  let fixture: ComponentFixture<UxSimpleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxSimpleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxSimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
