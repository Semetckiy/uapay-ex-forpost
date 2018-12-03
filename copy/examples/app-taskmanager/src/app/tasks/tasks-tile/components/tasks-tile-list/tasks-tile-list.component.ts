import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import { Task } from "../../../common/models/index";
import { TasksTileAddComponent } from "./tasks-tile-add/tasks-tile-add.component";
import { TasksTileItemComponent } from "./tasks-tile-item/tasks-tile-item.component";
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export enum ResultDisplayTypes {
  ERROR = 0,
  LOADING,
  EMPTY_RESULT,
  RESULT
}
@Component({
  selector: 'app-tasks-tile-list',
  templateUrl: './tasks-tile-list.component.html',
  host: {
    class: 'h-100 w-100'
  },
  styleUrls: ['./tasks-tile-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        animate('300ms', keyframes([
          style({transform: 'scale(.2)'}),
          style({transform: 'scale(1)'})
        ]))
      ]),
    ])
  ]
})
export class TasksTileListComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Input() loading = false;
  @Input() loadingError = false;
  @Input() taskAddTemplate: TemplateRef<TasksTileAddComponent> = null;
  @Input() taskItemTemplate: TemplateRef<TasksTileItemComponent> = null;

  @Output() showAddTask = new EventEmitter<void>();

  addExpanded = false;

  resultTypes = ResultDisplayTypes;

  get resultDisplay(): ResultDisplayTypes {
    if(this.loadingError){
      return ResultDisplayTypes.ERROR;
    }
    if(this.loading){
      return ResultDisplayTypes.LOADING;
    }

    if(this.tasks && this.tasks.length > 0){
      return ResultDisplayTypes.RESULT;
    }
    return ResultDisplayTypes.EMPTY_RESULT;
  }

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick(){
    this.showAddTask.emit();
  }



}
