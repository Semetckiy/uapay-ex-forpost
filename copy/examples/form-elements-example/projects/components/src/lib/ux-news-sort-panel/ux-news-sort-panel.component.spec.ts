import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxNewsSortPanelComponent } from './ux-news-sort-panel.component';

describe('UxNewsSortPanelComponent', () => {
  let component: UxNewsSortPanelComponent;
  let fixture: ComponentFixture<UxNewsSortPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxNewsSortPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxNewsSortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
