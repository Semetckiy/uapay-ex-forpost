import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTasksComponent } from './filter-tasks.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FILTER_MOCK } from "../../../common/models/mocks";
import { By } from "@angular/platform-browser";
import { FormGroupModule } from "@uxdf/p-components";
import { NgbCollapseModule, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { DfDatePickerModule } from "design-factory-v2";

describe('FilterTasksComponent', () => {
  let component: FilterTasksComponent;
  let fixture: ComponentFixture<FilterTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormGroupModule, DfDatePickerModule.forRoot(), NgbDatepickerModule, NgbCollapseModule ],
      declarations: [ FilterTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should consider filter given in inputs', () => {
    component.filter = {...FILTER_MOCK, filterTitle: 'Filter title'};
    component.ngOnInit();

    const input = fixture.debugElement.query(By.css('.qa-tb-filter-title'));
    expect(input.nativeElement.value).toBe('Filter title');
  });

  it('should emit filter', () => {
    let submit = false;
    const form = fixture.debugElement.query(By.css('.qa-task-filter-form'));
    component.filterTasks.subscribe(() => submit = true);
    form.triggerEventHandler('ngSubmit', null);
    expect(submit).toBeTruthy();
  });

  it('should emit reset filter', () => {
    let submit = false;
    const form = fixture.debugElement.query(By.css('.qa-btn-filter-reset'));
    component.filterReset.subscribe(() => submit = true);
    form.triggerEventHandler('click', null);
    expect(submit).toEqual(true);
  });

  it('should emit toggleExpand', () => {
    let submit = false;
    const form = fixture.debugElement.query(By.css('.qa-task-filter-expand'));
    component.toggleExpand.subscribe(() => submit = true);
    form.triggerEventHandler('click', null);
    expect(submit).toEqual(true);
  });
});
