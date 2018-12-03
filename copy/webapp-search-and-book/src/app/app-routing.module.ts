import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DemoPageComponent} from './demo-page/demo-page.component';
import {SearchPageComponent} from './search-page/search-page.component';

const ROUTES = [
  {path: 'search', component: SearchPageComponent},
  {path: '**', component: DemoPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
