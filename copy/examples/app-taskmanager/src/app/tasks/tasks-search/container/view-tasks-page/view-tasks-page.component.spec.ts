import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksPageComponent } from './view-tasks-page.component';
import { Store, StoreModule } from '@ngrx/store';

import * as fromFeature from "../../reducers";
import * as fromCommon from "../../../common/reducers";
import { DateFormatPipe } from "../../../common/pipes/date-format/date-format.pipe";
import { PriorityPipe } from "../../../common/pipes/priority/priority.pipe";
import { DfDatePickerModule } from "design-factory-v2";
import { NgbAlertModule, NgbCollapseModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { COMPONENTS } from "../../components";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroupModule } from "@uxdf/p-components";
import { FILTER_MOCK, TASK_MOCK } from "../../../common/models/mocks";
import { RouterTestingModule } from "@angular/router/testing";
import { FilterUrlService } from "../../../common/services/filter-url.service";
import { TaskIsOverduePipeModule } from "../../../common/pipes/task-is-overdue/task-is-overdue.pipe.module";
import {
  CancelEditTask,
  CreateTask,
  EditTask,
  ExpandTask,
  Filter,
  ResetFilter,
  ResolveTask,
  ShowAddTask,
  Sort,
  ToggleShowFilter,
  UpdateTask
} from "../../../common/actions/task-search.actions";
import { Go } from "../../../common/actions/routing.actions";
import { SortUrlService } from "../../../common/services/sort-url.service";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TasksFilter } from "../../../common/models";
import { LoadingAnimationModule } from "../../../common/components/loading-animation/loading-animation.module";


@Injectable()
export class ActivatedRouteStub {
  private _queryParamMap = new BehaviorSubject({});

  get queryParamMap() {
    return this._queryParamMap.asObservable();
  }

  mockQueryChange(o: any){
    this._queryParamMap.next(o);
  }
}

describe('ViewTasksPageComponent', () => {
  let component: ViewTasksPageComponent;
  let fixture: ComponentFixture<ViewTasksPageComponent>;
  let store: Store<any>;
  let filterUrlService: FilterUrlService;
  let sortUrlService: SortUrlService;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormGroupModule,
        DfDatePickerModule,
        TaskIsOverduePipeModule,
        NgbAlertModule,
        NgbDatepickerModule,
        NgbCollapseModule,
        NgbTooltipModule,
        LoadingAnimationModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('tasksCommon', fromCommon.reducers),
        StoreModule.forFeature('taskSearch', fromFeature.reducers),
      ],
      providers: [{
        provide: FilterUrlService, useValue: {
          toQuery: () => ({}),
          fromQuery: () => ({})
        }},{
        provide: ActivatedRoute, useClass: ActivatedRouteStub},{
        provide: SortUrlService, useValue: {
          toQuery: () => ({}),
          fromQuery: () => ({})
        }}
      ],
      declarations: [ ViewTasksPageComponent, DateFormatPipe, PriorityPipe, ...COMPONENTS ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    filterUrlService = TestBed.get(FilterUrlService);
    sortUrlService = TestBed.get(SortUrlService);
    activatedRoute = TestBed.get(ActivatedRoute);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  // Todo: provide routing tests.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch Filter action', () => {
    spyOn(sortUrlService, 'fromQuery').and.callFake(f => f);
    spyOn(filterUrlService, 'fromQuery').and.callFake(f => f);

    const action = new Filter({filter: <TasksFilter> {filterTitle: 'filter'}});
    activatedRoute.mockQueryChange({
      filterTitle: 'filter'
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch Sort action', () => {
    spyOn(sortUrlService, 'fromQuery').and.callFake(f => f);
    spyOn(filterUrlService, 'fromQuery').and.callFake(f => f);

    const action = new Sort({sorting: {sortColumn: 'unit-test', sortDescending: true}});
    activatedRoute.mockQueryChange({sortColumn: 'unit-test', sortDescending: true});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch CancelEditTask', () => {
    const action = new CancelEditTask({task: TASK_MOCK});
    component.onTaskCancel(TASK_MOCK);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch ResolveTask', () => {
    const action = new ResolveTask({task: TASK_MOCK, checked: true});
    component.onTaskDone({task: TASK_MOCK, checked: true});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch EditTask', () => {
    const action = new EditTask({task: TASK_MOCK});
    component.onTaskEdit(TASK_MOCK);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch ExpandTask', () => {
    const action = new ExpandTask({task: TASK_MOCK});
    component.onTaskExpand(TASK_MOCK);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch RoutingAction.Go when filters change', () => {
    spyOn(filterUrlService, 'toQuery').and.callFake(f => f);
    const now = Date.now();
    const action = new Go({
      path: ['tasks'],
      queryParams: {...FILTER_MOCK, r: now},
      extras: {queryParamsHandling: "merge"}
    });

    component.onTaskFilter(FILTER_MOCK, now);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(filterUrlService.toQuery).toHaveBeenCalledWith(FILTER_MOCK);
  });

  it('should dispatch FilterReset when filter has been reset', () => {
    spyOn(filterUrlService, 'toQuery').and.callFake(f => f);
    const action = new ResetFilter();

    component.onFilterReset();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch RoutingAction.Go when sorting change', () => {
    spyOn(sortUrlService, 'toQuery').and.callFake(f => f);

    const action = new Go({
      path: ['tasks'],
      queryParams: {sortDescending: true, sortColumn: 'unit-test'},
      extras: {queryParamsHandling: "merge"}
    });

    component.onTasksSort({sortDescending: true, sortColumn: 'unit-test'});
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(sortUrlService.toQuery).toHaveBeenCalledWith({sortDescending: true, sortColumn: 'unit-test'});
  });


  it('should dispatch UpdateTask', () => {
    const taskToSave = {original: TASK_MOCK, update: {...TASK_MOCK, title: 'title updated'}};
    const action = new UpdateTask(taskToSave);
    component.onTaskSave(taskToSave);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch ShowAddTask', () => {
    const action = new ShowAddTask();
    component.onNewTaskAddClick();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch CreateTask', () => {
    const taskToSave = {original: TASK_MOCK, update: {...TASK_MOCK, title: 'title updated'}};
    const action = new CreateTask(taskToSave);
    component.onNewTaskSave(taskToSave);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch ToggleShowFilter', () => {
    const action = new ToggleShowFilter();
    component.onToggleExpand();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
