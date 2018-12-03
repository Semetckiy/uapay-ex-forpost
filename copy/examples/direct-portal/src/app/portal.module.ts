import { NgModule } from '@angular/core';
import { AmadeusDirectHomeComponent } from './amadeus-direct-home/amadeus-direct-home.component';
import {AmadeusDirectModalComponent} from './amadeus-direct-modal/amadeus-direct-modal.component';
import {CardComponentComponent} from './card/card-component/card-component.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {HttpModule as SecoHttpModule} from '@seco/dev-utils/index';
import {TranslateModule} from '@seco/core/index';
import {AppRoutingModule} from './app-routing.module';
import {metaReducers, reducers} from '@uxdf/search-and-book/src/app/root.reducers';
import {EffectsModule} from '@ngrx/effects';
import {BrowserModule} from '@angular/platform-browser';
import {SearchModule} from '@uxdf/search-and-book/src/app/search/search.module';
import {TasksModule} from '@uxdf/taskmanager/src/app/tasks/tasks.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CORE_FEATURE, coreReducer} from '@uxdf/search-and-book/src/app/core.reducer';
import {environment} from '@uxdf/taskmanager/src/environments/environment';
import {TileModule} from '@uxdf/p-components';
import { AmadeusDirectIframeComponent } from './amadeus-direct-iframe/amadeus-direct-iframe.component';
import { EmptyTileComponent } from './empty-tile/empty-tile.component';
import { IframeService } from './services/iframe.service';
import { AmadeusDirectHomeContainerComponent } from './amadeus-direct-home-container/amadeus-direct-home-container.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

import { FooterComponent } from './home-page-components/footer/footer.component';
import { SideNavigationBarComponent } from './home-page-components/side-navigation-bar/side-navigation-bar.component';

@NgModule({
  declarations: [
    AmadeusDirectHomeComponent,
    AmadeusDirectModalComponent,
    CardComponentComponent,
    AmadeusDirectIframeComponent,
    EmptyTileComponent,
    AmadeusDirectHomeContainerComponent,
    FooterComponent,
    SideNavigationBarComponent,
    PageLayoutComponent,
  ],
  entryComponents: [AmadeusDirectModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    TasksModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forFeature(CORE_FEATURE, coreReducer),
    SecoHttpModule.forRoot(),
    TranslateModule.forRoot(),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TileModule,
  ],
  providers: [
    IframeService
  ],
  exports: [PageLayoutComponent],
})
export class PortalModule { }