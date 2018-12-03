import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPageTitleComponent } from './ux-page-title.component';

describe('UxAgencyComponent', () => {
  let component: UxPageTitleComponent;
  let fixture: ComponentFixture<UxPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
