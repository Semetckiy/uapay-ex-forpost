import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxBasePageContainerComponent } from './ux-base-page-container.component';

describe('UxBasePageContainerComponent', () => {
  let component: UxBasePageContainerComponent;
  let fixture: ComponentFixture<UxBasePageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxBasePageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxBasePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
