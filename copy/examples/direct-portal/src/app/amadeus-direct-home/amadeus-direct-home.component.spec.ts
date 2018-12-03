import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusDirectHomeComponent } from './amadeus-direct-home.component';

describe('AmadeusDirectHomeComponent', () => {
  let component: AmadeusDirectHomeComponent;
  let fixture: ComponentFixture<AmadeusDirectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusDirectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusDirectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
