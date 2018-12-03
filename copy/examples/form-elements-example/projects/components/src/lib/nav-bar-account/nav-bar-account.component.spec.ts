import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAccountComponent } from './nav-bar-account.component';

describe('PageContainerComponent', () => {
  let component: NavBarAccountComponent;
  let fixture: ComponentFixture<NavBarAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
