import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPageComponent } from './ux-page.component';

describe('UxPageComponent', () => {
  let component: UxPageComponent;
  let fixture: ComponentFixture<UxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
