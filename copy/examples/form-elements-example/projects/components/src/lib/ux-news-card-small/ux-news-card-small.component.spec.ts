import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxNewsCardSmallComponent } from './ux-news-card-small.component';

describe('UxNewsCardSmallComponent', () => {
  let component: UxNewsCardSmallComponent;
  let fixture: ComponentFixture<UxNewsCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxNewsCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxNewsCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
