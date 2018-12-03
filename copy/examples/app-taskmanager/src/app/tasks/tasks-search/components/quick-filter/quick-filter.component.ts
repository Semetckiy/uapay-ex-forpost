import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Count } from "../../../common/models/count.model";

@Component({
  selector: 'app-quick-filter',
  templateUrl: './quick-filter.component.html',
  styleUrls: ['./quick-filter.component.css']
})
export class QuickFilterComponent implements OnInit {

  @Input()
  showDoneTasks = false;

  @Input()
  count: Count = {
    doneCount: 0,
    dueCount: 0,
    overdueCount: 0,
    totalCount: 0
  };

  @Output() toggleShowDoneTasks = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onDoneFilterClick() {
      this.toggleShowDoneTasks.emit();
  }

}
