import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SortSettings } from "../../../../common/models";

export enum SortDirection {
  NONE = 0,
  ASC,
  DESC
}
@Component({
  selector: 'app-tasks-sort-col',
  templateUrl: './tasks-sort-col.component.html',
  styleUrls: ['./tasks-sort-col.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksSortColComponent implements OnInit {

  directions = SortDirection;

  @Input() settings: SortSettings = {
    sortColumn: null,
    sortDescending: null
  };
  @Input() columnId: string = null;

  @Output() change = new EventEmitter<SortSettings>();

  get direction(){
    if(this.columnId === this.settings.sortColumn && this.columnId !== null){
      if(this.settings.sortDescending){
        return SortDirection.DESC;
      }
      return SortDirection.ASC;
    }
    return SortDirection.NONE;
  }

  constructor() { }

  @HostListener('click') onClick() {
    this.change.emit({
      sortColumn: this.columnId,
      sortDescending: (this.columnId === this.settings.sortColumn ? !this.settings.sortDescending : true)
    });
  }

  ngOnInit() {
  }

}


