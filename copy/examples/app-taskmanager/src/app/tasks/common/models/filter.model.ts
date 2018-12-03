import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface TasksFilter {
  filterAssigneeSign: string;
  filterBookingRef: string;
  filterToDueDate: string | NgbDateStruct;
  filterFromDueDate: string | NgbDateStruct;
  filterPriority: string;
  filterTitle: string;
}
