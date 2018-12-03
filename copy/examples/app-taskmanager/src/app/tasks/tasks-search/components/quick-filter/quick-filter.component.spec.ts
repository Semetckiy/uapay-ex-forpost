import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickFilterComponent } from './quick-filter.component';
import { FormGroupModule } from "@uxdf/p-components";

describe('QuickFilterComponent', () => {
  let component: QuickFilterComponent;
  let fixture: ComponentFixture<QuickFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormGroupModule ],
      declarations: [ QuickFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
