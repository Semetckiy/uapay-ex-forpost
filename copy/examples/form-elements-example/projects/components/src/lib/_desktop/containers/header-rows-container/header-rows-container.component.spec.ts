import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRowsContainerComponent } from './header-rows-container.component';

describe('HeaderRowsContainerComponent', () => {
  let component: HeaderRowsContainerComponent;
  let fixture: ComponentFixture<HeaderRowsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRowsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRowsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
