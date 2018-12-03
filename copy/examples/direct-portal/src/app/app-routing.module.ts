import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmadeusDirectHomeComponent } from './amadeus-direct-home/amadeus-direct-home.component';
import {SearchPageComponent} from "@uxdf/search-and-book/src/app/search-page/search-page.component";
import { ViewTasksPageComponent } from "@uxdf/taskmanager/src/app/tasks/tasks-search/container/view-tasks-page/view-tasks-page.component";

const routes: Routes = [
  { path: 'tasks', component: ViewTasksPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: AmadeusDirectHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
