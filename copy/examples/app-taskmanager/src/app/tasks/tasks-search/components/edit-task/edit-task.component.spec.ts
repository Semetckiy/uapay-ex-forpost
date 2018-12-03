import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskComponent } from './edit-task.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DateFormatPipeModule } from "../../../common/pipes/date-format/date-format.pipe.module";
import { PriorityPipeModule } from "../../../common/pipes/priority/priority.pipe.module";
import { DfDatePickerModule } from "design-factory-v2";
import { NgbCollapseModule, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { By } from "@angular/platform-browser";
import { ChangeDetectionStrategy } from "@angular/core";
import { TASK_MOCK } from "../../../common/models/mocks";
import { LoadingAnimationModule } from "../../../common/components/loading-animation/loading-animation.module";
import { LoadingAnimationComponent } from "../../../common/components/loading-animation/loading-animation.component";

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, DateFormatPipeModule, PriorityPipeModule, DfDatePickerModule.forRoot(), NgbDatepickerModule, NgbCollapseModule, LoadingAnimationModule ],
      declarations: [ EditTaskComponent ]
    })
    .overrideComponent(EditTaskComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('EditTaskComponent', () => {

    describe('existing task', () => {
      it('should contain done checkbox', () => {
        component.task = {...component.task, id: 1};
        fixture.detectChanges();
        const el = fixture.debugElement.query(By.css('.qa-task-edit-done-toggle'));
        expect(el).not.toBeNull();
      });

      it('should contain edit button', () => {
        component.task = {...component.task, id: 1};
        fixture.detectChanges();
        const el = fixture.debugElement.query(By.css('.qa-btn-edit-task-edit'));
        expect(el).not.toBeNull();
      });

    });

    describe('new task', () => {
      it('should not contain done checkbox', () => {
        const el = fixture.debugElement.query(By.css('.qa-task-edit-done-toggle'));
        expect(el).toBeNull();
      });

      it('should not contain edit button', () => {
        const el = fixture.debugElement.query(By.css('.qa-btn-edit-task-edit'));
        expect(el).toBeNull();
      });

    });

    describe('[isLoading]', () => {
      it('should display loading animation', () => {
        component.isLoading = true;
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.directive(LoadingAnimationComponent));
        expect(input).not.toBeNull();
      });

      it('should not display loading animation', () => {
        component.isLoading = false;
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.directive(LoadingAnimationComponent));
        expect(input).toBeNull();
      });

      it('should show title input in edit mode', () => {
        component.editing = true;
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css('.qa-tb-new-task-title'));
        expect(input).not.toBeNull();
      });
    });

    describe('[editing]', () => {
      it('should not be in edit mode by default and therefor hide title input', () => {
        const input = fixture.debugElement.query(By.css('.qa-tb-new-task-title'));
        expect(input).toBeNull();
      });

      it('should show title input in edit mode', () => {
        component.editing = true;
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css('.qa-tb-new-task-title'));
        expect(input).not.toBeNull();
      });
    });

    describe('[overdue]', () => {
      it('should not highlight task as overdue', () => {
        const els = fixture.debugElement.queryAll(By.css('.text-danger'));
        expect(els.length).toEqual(0);
      });

      it('should highlight task as overdue', () => {
        component.isOverdue = true;
        fixture.detectChanges();
        const els = fixture.debugElement.queryAll(By.css('.text-danger'));
        expect(els.length).toEqual(4);
      });

    });

    describe('[expanded]', () => {
      it('should be collapsed by default', () => {
        const container = fixture.debugElement.query(By.css('.qa-edit-task-collapsible'));
        expect(container.classes.show).toEqual(false);
      });

      it('should be expanded when expanded set to true', () => {
        component.expanded = true;
        fixture.detectChanges();
        const container = fixture.debugElement.query(By.css('.qa-edit-task-collapsible'));
        expect(container.classes.show).toEqual(true);
      });
    });

    describe('[task]', () => {
      it('should display given task', () => {
        component.task = TASK_MOCK;
        fixture.detectChanges();
        const col = fixture.debugElement.query(By.css('.qa-tasklist-task-title'));
        expect(col.nativeElement.textContent).toEqual(TASK_MOCK.title);
      });
    });

    describe('[assignees]', () => {
      it('should display assignees friendly name', () => {
        component.task = TASK_MOCK;
        component.assignees = {[TASK_MOCK.assigneeSign]: {name: 'Assignee friendly name', sign: TASK_MOCK.assigneeSign}};
        fixture.detectChanges();
        const col = fixture.debugElement.query(By.css('.qa-task-edit-assignee-friendly-name'));
        expect(col.nativeElement.textContent).toEqual('Assignee friendly name');
      });

      it('should display list of assignees in edit mode', () => {
        component.task = TASK_MOCK;
        component.editing  = true;
        component.assignees = {
          [TASK_MOCK.assigneeSign]: {name: 'First Assignee', sign: TASK_MOCK.assigneeSign},
          ['second-assignee']: {name: 'Second Assignee', sign: 'Second Assignee Sign'}
        };
        fixture.detectChanges();
        const options = fixture.debugElement.queryAll(By.css('.qa-task-edit-assignees > option'));
        expect(options.length).toEqual(3);
        expect(options[0].nativeElement.value).toEqual('');
        expect(options[1].nativeElement.textContent).toEqual('First Assignee');
        expect(options[1].nativeElement.value).toEqual(TASK_MOCK.assigneeSign);
        expect(options[1].nativeElement.textContent).toEqual('First Assignee');
        expect(options[2].nativeElement.value).toEqual('second-assignee');
      });
    });

    describe('(cancel)', () => {
      it('should emit cancel', () => {
        let emitted = false;
        component.editing = true;
        fixture.detectChanges();
        component.cancel.subscribe(() => emitted = true);
        const btn = fixture.debugElement.query(By.css('.qa-btn-edit-task-cancel'));
        btn.triggerEventHandler('click', {});
        expect(emitted).toEqual(true);
      });

      it('should restore the form', () => {
        component.editing = true;
        fixture.detectChanges();
        const input = fixture.debugElement.query(By.css('.qa-tb-new-task-title'));
        input.nativeElement.value = 'Some unit test';
        input.triggerEventHandler('change', {});
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('.qa-btn-edit-task-cancel'));
        btn.triggerEventHandler('click', {});
        expect(input.nativeElement.value).toEqual('');
      });
    });

    describe('(done)', () => {
      it('should emit done', (done) => {
        component.task = {...component.task, id: 1};
        component.editing = true;
        fixture.detectChanges();
        let emitted = false;
        component.done.subscribe(() => {
          emitted = true;
          expect(emitted).toEqual(true);
          done();
        });
        const btn = fixture.debugElement.query(By.css('.qa-task-edit-done-toggle'));
        btn.triggerEventHandler('click', {});
      });
    });

    describe('(edit)', () => {
      it('should emit edit', () => {
        component.task = {...component.task, id: 1};
        component.expanded = true;
        fixture.detectChanges();
        let emitted = false;
        component.edit.subscribe(() => emitted = true);
        const btn = fixture.debugElement.query(By.css('.qa-btn-edit-task-edit'));
        btn.triggerEventHandler('click', {});
        expect(emitted).toEqual(true);
      });

      it('should be disabled when already editing', () => {
        component.task = {...component.task, id: 1};
        component.expanded = true;
        component.editing = true;
        fixture.detectChanges();
        const btn = fixture.debugElement.query(By.css('.qa-btn-edit-task-edit'));
        expect(btn.nativeElement.disabled).toEqual(true);
      });
    });

    describe('(expand)', () => {
      it('should emit expand', () => {
        component.task = {...component.task, id: 1};
        fixture.detectChanges();
        let emitted = false;
        component.expand.subscribe(() => emitted = true);
        const btn = fixture.debugElement.query(By.css('.qa-task-edit-expand'));
        btn.triggerEventHandler('click', {});
        expect(emitted).toEqual(true);
      });

      it('should not emit expand when editing', () => {
        component.task = {...component.task, id: 1};
        component.editing = true;
        fixture.detectChanges();
        let emitted = false;
        component.expand.subscribe(() => emitted = true);
        const btn = fixture.debugElement.query(By.css('.qa-task-edit-expand'));
        btn.triggerEventHandler('click', {});
        expect(emitted).toEqual(false);
      });
    });

    describe('(save)', () => {
      it('should not emit when not valid', () => {
        component.editing = true;

        fixture.detectChanges();
        let emitted = false;
        component.save.subscribe(() => emitted = true);
        const form = fixture.debugElement.query(By.css('.qa-frm-task-edit'));
        form.triggerEventHandler('ngSubmit', {});
        expect(emitted).toEqual(false);
      });

      it('should emit when valid', () => {
        component.editing = true;
        const now = new Date();
        component.form.patchValue({...component.form.getRawValue(), title: 'some title', dueDate: {
        year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
        }});
        fixture.detectChanges();
        let emitted = false;
        component.save.subscribe(() => emitted = true);
        const form = fixture.debugElement.query(By.css('.qa-frm-task-edit'));
        form.triggerEventHandler('ngSubmit', {});
        expect(emitted).toEqual(true);
      });
    });

  });
});
