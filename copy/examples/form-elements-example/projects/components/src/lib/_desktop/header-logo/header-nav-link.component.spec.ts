import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavLinkComponent } from './header-nav-link.component';

describe('HeaderNavLinkComponent', () => {
  let component: HeaderNavLinkComponent;
  let fixture: ComponentFixture<HeaderNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
