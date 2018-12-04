import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/component/authentication.component';

const ROUTES = [
  { path: '', component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: '**', component: AuthenticationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
