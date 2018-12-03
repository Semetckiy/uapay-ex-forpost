import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityPipe } from "./priority.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PriorityPipe],
  exports: [PriorityPipe]
})
export class PriorityPipeModule { }
