import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { TasksFilter } from '../../../common/models';
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../../../common/models/user.model";
import { Dictionary } from "@ngrx/entity";

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTasksComponent implements OnInit {

  @Input()
  users: Dictionary<User>;

  @Input()
  filter: TasksFilter = {
    filterAssigneeSign: '',
    filterBookingRef: '',
    filterToDueDate: null,
    filterFromDueDate: null,
    filterPriority: '',
    filterTitle: ''
  };

  @Input()
  expanded: true;

  @Output()
  filterTasks = new EventEmitter<TasksFilter>();

  @Output()
  toggleExpand = new EventEmitter<boolean>();

  @Output()
  filterReset = new EventEmitter();

  filterTasksForm: FormGroup;

  constructor() {
    this.createFormGroup();
  }

  ngOnInit() {
    this.filterTasksForm.patchValue(<{[k: string]: any}> this.filter);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.filter && changes.filter.currentValue){
      this.filterTasksForm.patchValue(changes.filter.currentValue);
    }
  }

  private createFormGroup() {
    this.filterTasksForm = new FormGroup({
      filterTitle: new FormControl(''),
      filterBookingRef: new FormControl(''),
      filterPriority: new FormControl( ''),
      filterToDueDate: new FormControl(null),
      filterFromDueDate: new FormControl(null),
      filterAssigneeSign: new FormControl('') });
  }

  submit() {
    if(this.filterTasksForm.valid){
      const newFilter = this.filterTasksForm.getRawValue();
      this.filterTasks.emit(newFilter);
    }
  }

  onResetClick() {
    this.filterReset.emit();
  }

  onToggleExpand() {
    this.toggleExpand.emit(true);
  }
}
