import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxRefDetailsComponent } from './ux-ref-details.component';

describe('UxRefDetailsComponent', () => {
  let component: UxRefDetailsComponent;
  let fixture: ComponentFixture<UxRefDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxRefDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxRefDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
