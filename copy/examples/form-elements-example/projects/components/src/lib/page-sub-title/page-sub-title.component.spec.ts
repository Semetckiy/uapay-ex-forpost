import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubTitleComponent } from './page-sub-title.component';

describe('PageSubTitleComponent', () => {
  let component: PageSubTitleComponent;
  let fixture: ComponentFixture<PageSubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSubTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
