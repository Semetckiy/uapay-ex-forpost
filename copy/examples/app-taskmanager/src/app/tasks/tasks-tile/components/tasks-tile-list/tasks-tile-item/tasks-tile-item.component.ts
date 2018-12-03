import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, HostBinding,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { Task } from "../../../../common/models/index";
import { animate, keyframes, sequence, style, transition, trigger } from "@angular/animations";
import { Subject, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

export type TaskTileResolveType = {
  task: Task,
  checked: boolean
}
@Component({
  selector: 'app-tasks-tile-item',
  templateUrl: './tasks-tile-item.component.html',
  styleUrls: ['./tasks-tile-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('leave', [
      transition(':leave', [
        animate('300ms 700ms', keyframes([
          style({transform: 'translateX(0rem)', opacity: 1}),
          style({transform: 'translateX(-3rem)', opacity: 0})
        ]))
      ])
    ])
  ]
})
export class TasksTileItemComponent implements OnDestroy{

  @HostBinding('class.d-block') block = true;
  @HostBinding('@leave') animation = true;
  
  @Input() task: Task = {
    title: '',
    done: false,
    dueDate: {},
    description: '',
    bookingRef: '',
    priority: '',
    assigneeSign: ''
  };
  @Input() isOverdue = false;

  @Output() done = new EventEmitter<TaskTileResolveType>();
  @Output() select = new EventEmitter<Task>();

  @ViewChild('cb') checkbox: ElementRef;

  private emitter = new Subject<TaskTileResolveType>();
  private emitterSubscription: Subscription;

  constructor() {
    this.emitterSubscription = this.emitter.pipe(
      debounceTime(500)
    ).subscribe((o) => this.done.emit(o));
  }

  ngOnDestroy(){
    this.emitterSubscription.unsubscribe();
  }

  onTaskClick(t: Task){
    this.select.emit(t);
  }

  onCheckboxClick(task: Task){
    this.emitter.next({
      task,
      checked: this.checkbox.nativeElement.checked
    });
  }

}

