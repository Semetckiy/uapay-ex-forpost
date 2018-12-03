import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPageSubTitleComponent } from './ux-page-sub-title.component';

describe('UxPageSubTitleComponent', () => {
  let component: UxPageSubTitleComponent;
  let fixture: ComponentFixture<UxPageSubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPageSubTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPageSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
