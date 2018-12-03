import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxNewsComponentComponent } from './ux-news-component.component';

describe('UxSelectComponent', () => {
  let component: UxNewsComponentComponent;
  let fixture: ComponentFixture<UxNewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxNewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
