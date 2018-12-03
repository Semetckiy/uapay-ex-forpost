import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeytextComponent } from './keytext.component';

describe('KeytextComponent', () => {
  let component: KeytextComponent;
  let fixture: ComponentFixture<KeytextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeytextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
