import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Task } from "../../../../common/models/index";
import { NgbDateStruct, NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";
import { DOCUMENT } from "@angular/common";
import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export type TasksTileAddSubmitType = {
  original: Task,
  update: Task
}
export type TasksTileNotificationSettingsType = {
  showNotification: boolean,
  notificationType: 'text-danger' | 'text-success',
  notificationMessage: string
}
@Component({
  selector: 'app-tasks-tile-add',
  templateUrl: './tasks-tile-add.component.html',
  styleUrls: ['./tasks-tile-add.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter, true => false', [
        animate('100ms', keyframes([
          style({transform: 'translateY(1rem)'}),
          style({transform: 'translateY(0rem)'})
        ]))
      ]),
      transition(':leave, false => true', [
        animate('100ms', keyframes([
          style({transform: 'translateY(0rem)'}),
          style({transform: 'translateY(1rem)'})
        ]))
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksTileAddComponent implements OnChanges {

  @Input() expanded = false;
  @Input() isCreating = false;

  @Input() notificationSettings: TasksTileNotificationSettingsType = {
    showNotification: false,
    notificationType: null,
    notificationMessage: null,
  };

  @Output() save = new EventEmitter<TasksTileAddSubmitType>();
  @Output() expand = new EventEmitter<void>();
  @Output() hide = new EventEmitter<void>();

  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild(NgbInputDatepicker) private datePicker: NgbInputDatepicker;

  @Input() defaultTask: Task = {
    title: '',
    dueDate: null,
    done: false
  };
  form: FormGroup;
  today: NgbDateStruct;

  get hideAddForm(): boolean {
    if(this.notificationSettings.showNotification){
      return true;
    } else {
      return !this.expanded;
    }
  }

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: any) {
    this.form = this.createForm();

    const now = new Date();
    this.today = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

    // We need to listen to the event in capture phase because in bubble phase the datepicker popup may be closed again
    // e.g. after selecting a date. The resulting click would be handled as a click outside, but in fact it is not.
    // Capture phase seems not yet supported by angular, therefor we need to implement it natively.
    // https://github.com/angular/angular/issues/11200
    this.document.addEventListener('click', this.onDocumentClick.bind(this), true);
  }

  ngOnDestroy() {
    this.document.removeEventListener('click', this.onDocumentClick.bind(this), true);
  }

  ngOnInit() {
    const {title, dueDate} = this.defaultTask;
    this.form.patchValue({title, dueDate});

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.defaultTask && changes.defaultTask.currentValue){
      const {title, dueDate} = changes.defaultTask.currentValue;
      this.form.patchValue({title, dueDate});
    }
    if(changes.expanded && changes.expanded.currentValue){
      setTimeout(()=>this.titleInput.nativeElement.focus());
    }
    if(changes && changes.isCreating){
      if(changes.isCreating.currentValue === true){
        this.form.disable();
      } else if(changes.isCreating.currentValue === false) {
        this.form.enable();
      }
    }
  }

  onDocumentClick(event) {
    if(!this.element.nativeElement.contains(event.target)
      && !this.datePicker.isOpen()
      && this.expanded)
    {
      this.hide.emit();
    }
  }

  onExpandSubmitClick() {
    if(this.expanded){
      this.onSubmit();
    } else {
      this.expand.emit();
    }
  }

  onEscapePress() {
    this.hide.emit();
  }

  private onSubmit() {
    if(this.form.valid){
      this.save.emit({
        original: this.defaultTask,
        update: this.form.getRawValue()
      });
    }
  }

  private createForm(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [Validators.required]),
      dueDate: new FormControl(null, [Validators.required])
    });
  }
}
