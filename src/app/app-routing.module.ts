import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/component/authentication.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DeviceRroComponent } from './pages/device-rro/device-rro.component';

const ROUTES = [
  { path: '',               component: LayoutComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'device-rro',     component: DeviceRroComponent },
  { path: '**',             component: LayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
