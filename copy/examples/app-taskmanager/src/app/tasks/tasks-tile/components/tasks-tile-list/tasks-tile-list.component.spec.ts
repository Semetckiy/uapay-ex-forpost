import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDisplayTypes, TasksTileListComponent } from './tasks-tile-list.component';
import { DateFormatPipeModule } from "../../../common/pipes/date-format/date-format.pipe.module";
import { Component } from "@angular/core";
import { TASKS_MOCK } from "../../../common/models/mocks";
import { By } from "@angular/platform-browser";
import { LoadingAnimationModule } from "../../../common/components/loading-animation/loading-animation.module";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'test',
  template: `
    <app-tasks-tile-list 
      [tasks]="tasks" 
      [taskItemTemplate]="taskItemTemplate" 
      [taskAddTemplate]="taskAddTemplate" 
      [loading]="loading"
      [loadingError]="loadingError"
    ></app-tasks-tile-list>
    <ng-template #taskItemTemplate let-task="task">
      <div class="qa-task-item"></div>
    </ng-template>
    <ng-template #taskAddTemplate >
      <div class="qa-add-task"></div>
    </ng-template>
  `
})
class TestComponent {
  tasks = TASKS_MOCK;
  loading = false;
  loadingError = false;
}
describe('TasksTileListComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DateFormatPipeModule, LoadingAnimationModule, NoopAnimationsModule],
      declarations: [ TasksTileListComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task add template', () => {
    const taskAdd = fixture.debugElement.queryAll(By.css('.qa-add-task'));
    expect(taskAdd.length).toEqual(1);
  });

  it('should add a task item template for each task', () => {
    const taskItem = fixture.debugElement.queryAll(By.css('.qa-task-item'));
    expect(taskItem.length).toEqual(TASKS_MOCK.length);
  });

  it('should show loading component', () => {
    component.loading = true;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksTileListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.LOADING);
  });

  it('should show result list', () => {
    component.loading = false;
    component.loadingError = false;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksTileListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.RESULT);
  });

  it('should show loading error', () => {
    component.loading = true;
    component.loadingError = true;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksTileListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.ERROR);
  });

  it('should show empty result', () => {
    component.loading = false;
    component.loadingError = false;
    component.tasks = [];
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksTileListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.EMPTY_RESULT);
  });

});
