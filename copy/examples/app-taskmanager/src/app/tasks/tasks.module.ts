import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TasksTileModule } from "./tasks-tile/tasks-tile.module";
import { TasksSearchModule } from "./tasks-search/tasks-search.module";
import { EffectsModule } from "@ngrx/effects";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCredentialsInterceptor } from "./common/services/http/http-credentials-interceptor.service";
import { RoutingEffects } from "./common/effects/routing.effects";
import { UserEntitiesEffects } from "./common/effects/user.effects";
import * as fromFeature from "./common/reducers";
import { StoreModule } from "@ngrx/store";
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('tasksCommon', fromFeature.reducers),
    EffectsModule.forFeature([RoutingEffects, UserEntitiesEffects]),
    TasksTileModule,
    TasksSearchModule
  ],
  providers: [{ provide: 'API_BASE', useValue: environment.api_url },
              { provide: HTTP_INTERCEPTORS, useClass: HttpCredentialsInterceptor, multi: true }],
  exports: [TasksTileModule, TasksSearchModule]
})
export class TasksModule { }
