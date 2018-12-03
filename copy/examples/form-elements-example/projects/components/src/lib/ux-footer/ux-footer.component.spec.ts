import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxFooterComponent } from './ux-footer.component';

describe('UxAgencyComponent', () => {
  let component: UxFooterComponent;
  let fixture: ComponentFixture<UxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
