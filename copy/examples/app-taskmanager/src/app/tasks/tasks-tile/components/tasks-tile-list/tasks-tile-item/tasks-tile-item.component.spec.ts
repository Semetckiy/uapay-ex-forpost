import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTileItemComponent } from './tasks-tile-item.component';
import { DateFormatPipeModule } from "../../../../common/pipes/date-format/date-format.pipe.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TASK_MOCK } from "../../../../common/models/mocks";
import { By } from "@angular/platform-browser";
import { ChangeDetectionStrategy } from "@angular/core";

describe('TasksTileItemComponent', () => {
  let component: TasksTileItemComponent;
  let fixture: ComponentFixture<TasksTileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DateFormatPipeModule,
        BrowserAnimationsModule
      ],
      declarations: [ TasksTileItemComponent ]
    }).overrideComponent(TasksTileItemComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a task', () => {
    component.task = TASK_MOCK;
    fixture.detectChanges();
    const txt = fixture.debugElement.query(By.css('.qa-ref-widget-task-title'));
    expect(txt.nativeElement.textContent).toEqual(TASK_MOCK.title);
  });

  it('should emit (select) when clicked', () => {
    let clickedTask = null;
    component.task = TASK_MOCK;
    component.select.subscribe((t) => clickedTask = t);
    fixture.detectChanges();
    const lnk = fixture.debugElement.query(By.css('.qa-ref-widget-task-title'));
    lnk.triggerEventHandler('click', {});
    expect(clickedTask).toEqual(TASK_MOCK);
  });

  it('should emit (done) when checkbox is clicked', (done) => {
    let obj = null;
    component.task = TASK_MOCK;
    component.done.subscribe((t) => {
      obj = t;
      expect(obj).toEqual({
        task: TASK_MOCK,
        checked: TASK_MOCK.done
      });
      done();
    });
    fixture.detectChanges();
    const cb = fixture.debugElement.query(By.css('.qa-cb-col'));
    cb.triggerEventHandler('click', {});
  });


});
