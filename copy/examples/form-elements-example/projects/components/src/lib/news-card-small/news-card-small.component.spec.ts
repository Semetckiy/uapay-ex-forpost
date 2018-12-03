import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardSmallComponent } from './news-card-small.component';

describe('NewsCardSmallComponent', () => {
  let component: NewsCardSmallComponent;
  let fixture: ComponentFixture<NewsCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
