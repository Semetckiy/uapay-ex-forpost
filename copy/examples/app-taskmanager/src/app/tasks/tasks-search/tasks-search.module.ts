import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from "./components";
import { ViewTasksPageComponent } from "./container/view-tasks-page/view-tasks-page.component";
import { StoreModule } from "@ngrx/store";
import * as fromFeature from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbAlertModule, NgbCollapseModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DfAlertModule, DfDatePickerModule } from "design-factory-v2";
import { TaskIsOverduePipeModule } from "../common/pipes/task-is-overdue/task-is-overdue.pipe.module";
import { DateFormatPipeModule } from "../common/pipes/date-format/date-format.pipe.module";
import { PriorityPipeModule } from "../common/pipes/priority/priority.pipe.module";
import { FormGroupModule } from "@uxdf/p-components";
import { TaskSearchEffects } from "./effects/tasks-search.effects";
import { TasksSearchNotificationEffects } from "./effects/tasks-search-notification.effects";
import { LoadingAnimationModule } from "../common/components/loading-animation/loading-animation.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('taskSearch', fromFeature.reducers),
    EffectsModule.forFeature([TaskSearchEffects, TasksSearchNotificationEffects]),
    RouterModule,
    ReactiveFormsModule,
    NgbAlertModule,
    DfAlertModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    DfDatePickerModule.forRoot(),
    NgbTooltipModule,
    TaskIsOverduePipeModule,
    DateFormatPipeModule,
    PriorityPipeModule,
    LoadingAnimationModule,
    FormGroupModule
  ],
  declarations: [COMPONENTS, ViewTasksPageComponent]
})
export class TasksSearchModule { }
