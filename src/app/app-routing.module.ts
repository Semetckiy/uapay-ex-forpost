import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/component/authentication.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DeviceRroComponent } from './pages/device-rro/device-rro.component';
import { PaComponent } from './pages/payment-acceptance/component/index/pa.component';
import { PaCreateComponent } from './pages/payment-acceptance/component/create/pa-create.component';
import { TlComponent } from './pages/transaction-log/components/index/tl.component';
import { NavPanelComponent } from './pages/cash-book/components/nav-panel/nav-panel.component';

const ROUTES = [
  { path: '',                           component: LayoutComponent },
  { path: 'authentication',             component: AuthenticationComponent },
  { path: 'device-rro',                 component: DeviceRroComponent },
  { path: 'payment-acceptance',         component: PaComponent },
  { path: 'payment-acceptance/create',  component: PaCreateComponent },
  { path: 'transaction-log',            component: TlComponent },
  { path: 'cash-book',                  component: NavPanelComponent },
  { path: '**',                         component: LayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
