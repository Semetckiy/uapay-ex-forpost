import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTileAddComponent } from './tasks-tile-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgbCollapseModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DfDatePickerModule } from "design-factory-v2";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TASK_MOCK } from "../../../../common/models/mocks";
import { By } from "@angular/platform-browser";
import { LoadingAnimationModule } from "../../../../common/components/loading-animation/loading-animation.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'test',
  template: `
    <app-tasks-tile-add 
      [defaultTask]="defaultTask" 
      (expand)="expand($event)" 
      (save)="save($event)" 
      [expanded]="expanded"
      (hide)="hide()"  
      [notificationSettings]="notificationSettings"></app-tasks-tile-add>
      <button class="test-component-button"></button>
  `
})
class TestComponent {
  now = new Date();
  today = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  defaultTask = {TASK_MOCK, title: 'Unit test', dueDate: this.today};
  notificationSettings = {
    showNotification: false,
    notificationType: null,
    notificationMessage: null
  };
  expanded = false;

  expand(){}
  hide(){}
  save(o: any){}
}
describe('TasksTileAddComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbTooltipModule,
        DfDatePickerModule,
        LoadingAnimationModule
      ],
      declarations: [ TasksTileAddComponent, TestComponent ]
    })
    .overrideComponent(TasksTileAddComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
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

  it('should use given defaults', () => {
    const title = fixture.debugElement.query(By.css('.qa-tb-widget-add-task-title'));
    expect(title.nativeElement.value).toEqual('Unit test');
  });

  it('should dispatch expand', () => {
    spyOn(component, 'expand');
    const btn = fixture.debugElement.query(By.css('.qa-btn-widget-add-task'));
    btn.triggerEventHandler('click', {});
    expect(component.expand).toHaveBeenCalled();
  });

  it('should dispatch hide when when escape pressed in input', () => {
    spyOn(component, 'hide');
    const c = fixture.debugElement.query(By.directive(TasksTileAddComponent));
    c.componentInstance.onEscapePress();
    expect(component.hide).toHaveBeenCalled();
  });

  it('should dispatch hide when clicked outside', () => {
    spyOn(component, 'hide');
    component.expanded = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.test-component-button'));
    const c = fixture.debugElement.query(By.directive(TasksTileAddComponent));
    c.componentInstance.onDocumentClick({target: btn.nativeElement});
    expect(component.hide).toHaveBeenCalled();
  });

  it('should not dispatch hide when clicked outside and not expanded', () => {
    spyOn(component, 'hide');
    const btn = fixture.debugElement.query(By.css('.test-component-button'));
    const c = fixture.debugElement.query(By.directive(TasksTileAddComponent));
    c.componentInstance.onDocumentClick({target: btn.nativeElement});
    expect(component.hide).not.toHaveBeenCalled();
  });

  it('should dispatch save when form is valid', () => {
    spyOn(component, 'save');
    component.expanded = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.qa-btn-widget-add-task'));
    btn.triggerEventHandler('click', {});
    expect(component.save).toHaveBeenCalled();
  });

  it('should not dispatch save when form is invalid', () => {
    spyOn(component, 'save');
    component.defaultTask = {...component.defaultTask, title: ''};
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.qa-btn-widget-add-task'));
    btn.triggerEventHandler('click', {});
    expect(component.save).not.toHaveBeenCalled();
  });

  it('should hideAddForm when notification is displayed', () => {
    component.notificationSettings = {
      showNotification: true,
      notificationType: 'notificationType',
      notificationMessage: 'notificationMessage',
    };
    component.expanded = true;
    fixture.detectChanges();
    const add = fixture.debugElement.query(By.directive(TasksTileAddComponent));

    expect(add.componentInstance.hideAddForm).toEqual(true);
  });

});
