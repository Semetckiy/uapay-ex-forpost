import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcustomComponent } from './textcustom.component';

describe('TextcustomComponent', () => {
  let component: TextcustomComponent;
  let fixture: ComponentFixture<TextcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
