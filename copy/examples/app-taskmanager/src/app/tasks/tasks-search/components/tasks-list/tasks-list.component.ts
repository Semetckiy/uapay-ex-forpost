import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Task } from "../../../common/models/task.model";
import { EditTaskComponent } from "..";
import { SortSettings } from "../../../common/models";
import { SelectedTaskType } from "../../container/view-tasks-page/view-tasks-page.component";

export enum ResultDisplayTypes {
  ERROR = 0,
  LOADING,
  EMPTY_RESULT,
  RESULT
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Input() loading = false;
  @Input() taskTemplate: TemplateRef<EditTaskComponent> = null;
  @Input() sorting: SortSettings = null;
  @Input() selectedTask: SelectedTaskType = null;
  @Input() loadingError = false;

  @Output() sort = new EventEmitter<string>();

  loaded = false;

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

  constructor() {
  }

  ngOnInit() {
  }

  onSortChange(columnId: string) {
    this.sort.emit(columnId);
  }
}
