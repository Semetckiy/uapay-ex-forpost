import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDisplayTypes, TasksListComponent } from './tasks-list.component';
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import { TASKS_MOCK } from "../../../common/models/mocks";
import { By } from "@angular/platform-browser";
import { TasksSortColComponent } from "./tasks-sort-col/tasks-sort-col.component";
import { SortSettings } from "../../../common/models";
import { LoadingAnimationModule } from "../../../common/components/loading-animation/loading-animation.module";
import { RouterTestingModule } from "@angular/router/testing";


@Component({
  selector: 'test',
  template: `
    <app-tasks-list [tasks]="tasks" [taskTemplate]="taskItemTemplate" [sorting]="sorting" [loading]="loading" [loadingError]="loadingError"></app-tasks-list>
    <ng-template #taskItemTemplate let-task="task">
      <div class="qa-task-title">{{task.title}}</div>
    </ng-template>
  `
})
class TestComponent {
  tasks = TASKS_MOCK;
  sorting: SortSettings = {sortDescending: true, sortColumn: 'test'};
  loading = false;
  loadingError = false;
}
describe('TasksListComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbAlertModule, LoadingAnimationModule, RouterTestingModule ],
      declarations: [ TasksListComponent, TestComponent, TasksSortColComponent ]
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

  it('should contain two tasks', () => {
    expect(fixture.debugElement.queryAll(By.css('.qa-task-title')).length).toBe(2);
  });

  it('should be in loading state', () => {
    component.loading = true;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.LOADING);
  });

  it('should be in error state', () => {
    component.loading = true;
    component.loadingError = true;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.ERROR);
  });
  it('should be in result state', () => {
    component.loading = false;
    component.loadingError = false;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.RESULT);
  });

  it('should be in empty result state', () => {
    component.loading = false;
    component.loadingError = false;
    component.tasks = [];
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.directive(TasksListComponent)).componentInstance;
    expect(list.resultDisplay).toEqual(ResultDisplayTypes.EMPTY_RESULT);
  });

});
