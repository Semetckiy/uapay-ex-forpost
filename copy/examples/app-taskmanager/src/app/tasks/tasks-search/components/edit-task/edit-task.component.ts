import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Task, User } from "../../../common/models";
import { Dictionary } from "@ngrx/entity";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Subject, Subscription } from "rxjs";
import { TaskTileResolveType } from "../../../tasks-tile/components/tasks-tile-list/tasks-tile-item/tasks-tile-item.component";
import { debounceTime } from "rxjs/operators";
import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export type TaskEditSubmitType = {
  original: Task,
  update: Task
}

export type TaskEditResolveType = {
  task: Task,
  checked: boolean
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  host: {
    'class': 'border-bottom',
    '[class.card]': 'isNew',
    '[class.pt-2]': 'isNew'

  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskComponent implements OnInit, OnChanges, OnDestroy{
  @Input() editing = false;
  @Input() expanded = false;
  @Input() isOverdue = false;
  @Input() isLoading = false;
  @Input() assignees: Dictionary<User> = {};
  @Input() task: Task = {
    title: '',
    done: false,
    dueDate: {},
    description: '',
    bookingRef: '',
    priority: '',
    assigneeSign: ''
  };

  @Output() cancel = new EventEmitter<Task>();
  @Output() done = new EventEmitter<TaskEditResolveType>();
  @Output() edit = new EventEmitter<Task>();
  @Output() expand = new EventEmitter<Task>();
  @Output() save = new EventEmitter<TaskEditSubmitType>();

  @ViewChild('cb') checkbox: ElementRef;

  form: FormGroup = null;
  today: NgbDateStruct;

  submitted = false;

  private emitter = new Subject<TaskEditResolveType>();
  private emitterSubscription: Subscription;

  get isNew(){
    return !this.task || !this.task.id;
  }

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      dueDate: new FormControl({}, [Validators.required]),
      description: new FormControl('', []),
      bookingRef: new FormControl('', []),
      priority: new FormControl(null, []),
      assigneeSign: new FormControl('', [])
    });

    const now = new Date();
    this.today = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

    this.emitterSubscription = this.emitter.pipe(
      debounceTime(500)
    ).subscribe((o) => this.done.emit(o));
  }

  ngOnDestroy(){
    this.emitterSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes && changes.task && changes.task.currentValue){
      this.form.patchValue({...changes.task.currentValue});
      this.submitted = false;
    }
    if(changes && changes.isLoading){
      if(changes.isLoading.currentValue === true){
        this.form.disable();
      } else if(changes.isLoading.currentValue === false) {
        this.form.enable();
      }
    }
  }

  ngOnInit() {
    this.form.patchValue({...this.task})
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){
      this.save.emit({
        original: this.task,
        update: this.form.getRawValue()
      });
    }
  }

  onCancelClick() {
    this.submitted = false;
    const t: Task = {...this.task};
    this.form.patchValue(t);
    this.cancel.emit(t);
  }

  onExpandClick(task: Task, dispatch: boolean = true) {
    if(dispatch){
      this.expand.emit(task);
    }
  }

  onDoneCheckboxClick(task: Task) {
    this.emitter.next({
      task,
      checked: this.checkbox.nativeElement.checked
    });
  }
}
