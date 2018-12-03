import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPageSectionComponent } from './ux-page-section.component';

describe('UxNewsSortPanelComponent', () => {
  let component: UxPageSectionComponent;
  let fixture: ComponentFixture<UxPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
