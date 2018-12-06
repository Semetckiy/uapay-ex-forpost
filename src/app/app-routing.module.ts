import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/component/authentication.component';
import { LayoutComponent } from './pages/_layout/layout.component';
import { DeviceRroComponent } from './pages/device-rro/device-rro.component';

const ROUTES = [
  { path: '',               component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'app',            component: LayoutComponent },
  { path: 'app/device-rro', component: DeviceRroComponent },
  { path: '**',             component: AuthenticationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
