import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusDirectHomeContainerComponent } from './amadeus-direct-home-container.component';

describe('AmadeusDirectHomeContainerComponent', () => {
  let component: AmadeusDirectHomeContainerComponent;
  let fixture: ComponentFixture<AmadeusDirectHomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusDirectHomeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusDirectHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
