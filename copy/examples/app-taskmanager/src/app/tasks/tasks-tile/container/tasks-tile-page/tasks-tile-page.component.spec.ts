import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTilePageComponent } from './tasks-tile-page.component';
import { Store, StoreModule } from '@ngrx/store';

import * as fromFeature from "../../reducers/index";
import { ReactiveFormsModule } from "@angular/forms";
import { DateFormatPipeModule } from "../../../common/pipes/date-format/date-format.pipe.module";
import { NgbCollapseModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DfDatePickerModule } from "design-factory-v2";
import { TasksTileAddComponent, TasksTileItemComponent, TasksTileListComponent } from "../../../tasks-tile/components";
import { TaskIsOverduePipeModule } from "../../../common/pipes/task-is-overdue/task-is-overdue.pipe.module";
import * as TaskTileActions from "../../../common/actions/task-tile.actions";
import { TASK_MOCK } from "../../../common/models/mocks";
import { LoadingAnimationModule } from "../../../common/components/loading-animation/loading-animation.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('TasksTilePageComponent', () => {
  let component: TasksTilePageComponent;
  let fixture: ComponentFixture<TasksTilePageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DateFormatPipeModule,
        ReactiveFormsModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        TaskIsOverduePipeModule,
        DfDatePickerModule,
        NgbTooltipModule,
        LoadingAnimationModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('taskTile', fromFeature.reducers)
      ],
      declarations: [ TasksTilePageComponent, TasksTileListComponent, TasksTileAddComponent, TasksTileItemComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(TasksTilePageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load data initially', () => {
    const action = new TaskTileActions.LoadTasks();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch TaskTileActions.Select', () => {
    const action = new TaskTileActions.Select({task: TASK_MOCK});
    component.onTaskSelect(TASK_MOCK);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch TaskTileActions.ShowTaskTileAdd', () => {
    const action = new TaskTileActions.ShowTaskTileAdd();
    component.onAddExpand();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch TaskTileActions.HideTaskTileAdd', () => {
    const action = new TaskTileActions.HideTaskTileAdd();
    component.onAddHide();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch TaskTileActions.CreateTask', () => {
    const action = new TaskTileActions.CreateTask({original: {...TASK_MOCK}, update: {...TASK_MOCK}});
    component.onAddSubmit({original: {...TASK_MOCK}, update: {...TASK_MOCK}});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('TaskTileActions.ResolveTask', () => {
    const action = new TaskTileActions.ResolveTask({
      task: {...TASK_MOCK},
      checked: true
    });
    component.onTaskDone({
      task: {...TASK_MOCK},
      checked: true
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });



});
