import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavLinksContainerComponent } from './header-nav-links-container.component';

describe('HeaderLogoContainerComponent', () => {
  let component: HeaderNavLinksContainerComponent;
  let fixture: ComponentFixture<HeaderNavLinksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavLinksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavLinksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
