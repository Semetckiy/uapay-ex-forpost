import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { DemoHomepageComponent } from "./demo-homepage/demo-homepage.component";
import { ViewTasksPageComponent } from "./tasks/tasks-search/container/view-tasks-page/view-tasks-page.component";

const ROUTES = [
  { path: 'home', component: DemoHomepageComponent  },
  { path: 'tasks', component: ViewTasksPageComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
