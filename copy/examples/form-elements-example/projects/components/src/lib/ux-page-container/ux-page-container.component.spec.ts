import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxPageContainerComponent } from './ux-page-container.component';

describe('UxPageContainerComponent', () => {
  let component: UxPageContainerComponent;
  let fixture: ComponentFixture<UxPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
