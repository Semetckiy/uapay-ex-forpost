import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTilePageComponent } from "./container/tasks-tile-page/tasks-tile-page.component";
import { COMPONENTS } from "./components";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbCollapseModule, NgbDatepickerModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DfDatePickerModule } from "design-factory-v2";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import * as fromFeature from "./reducers";
import { TaskIsOverduePipeModule } from "../common/pipes/task-is-overdue/task-is-overdue.pipe.module";
import { DateFormatPipeModule } from "../common/pipes/date-format/date-format.pipe.module";
import { EffectsModule } from "@ngrx/effects";
import { TaskTileEffects } from "./effects/task-tile.effects";
import { TaskTileNotificationEffects } from "./effects/task-tile-notification.effects";
import { LoadingAnimationModule } from "../common/components/loading-animation/loading-animation.module";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('taskTile', fromFeature.reducers),
    EffectsModule.forFeature([TaskTileEffects, TaskTileNotificationEffects]),
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    DfDatePickerModule.forRoot(),
    NgbTooltipModule,
    BrowserAnimationsModule,
    TaskIsOverduePipeModule,
    LoadingAnimationModule,
    DateFormatPipeModule
  ],
  declarations: [TasksTilePageComponent, COMPONENTS],
  exports: [TasksTilePageComponent]
})
export class TasksTileModule { }
