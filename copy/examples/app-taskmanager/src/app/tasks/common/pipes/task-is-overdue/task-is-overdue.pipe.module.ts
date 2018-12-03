import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskIsOverduePipe } from "./task-is-overdue.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskIsOverduePipe],
  exports: [TaskIsOverduePipe]
})
export class TaskIsOverduePipeModule { }
