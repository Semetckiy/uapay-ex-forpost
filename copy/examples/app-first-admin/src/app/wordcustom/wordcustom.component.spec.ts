import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcustomComponent } from './wordcustom.component';

describe('WordcustomComponent', () => {
  let component: WordcustomComponent;
  let fixture: ComponentFixture<WordcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
