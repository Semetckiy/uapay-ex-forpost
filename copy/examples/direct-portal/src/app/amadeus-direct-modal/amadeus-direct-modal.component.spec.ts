import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeusDirectModalComponent } from './amadeus-direct-modal.component';

describe('AmadeusDirectModalComponent', () => {
  let component: AmadeusDirectModalComponent;
  let fixture: ComponentFixture<AmadeusDirectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadeusDirectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeusDirectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
