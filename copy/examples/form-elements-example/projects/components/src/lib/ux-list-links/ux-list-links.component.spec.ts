import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxListLinksComponent } from './ux-list-links.component';

describe('UxListLinksComponent', () => {
  let component: UxListLinksComponent;
  let fixture: ComponentFixture<UxListLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxListLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxListLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
