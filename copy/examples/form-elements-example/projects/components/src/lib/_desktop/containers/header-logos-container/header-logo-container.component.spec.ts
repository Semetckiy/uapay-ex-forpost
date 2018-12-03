import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoContainerComponent } from './header-logo-container.component';

describe('HeaderLogoContainerComponent', () => {
  let component: HeaderLogoContainerComponent;
  let fixture: ComponentFixture<HeaderLogoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLogoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
