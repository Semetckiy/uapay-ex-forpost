import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchModule} from '@uxdf/search-and-book/src/app/search/search.module';
import {StoreModule} from '@ngrx/store';
import {HttpModule as SecoHttpModule} from '@seco/dev-utils/index';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '@uxdf/search-and-book/src/app/root.reducers';
import {TranslateModule} from '@seco/core/index';
import {CORE_FEATURE, coreReducer} from '@uxdf/search-and-book/src/app/core.reducer';
import { AmadeusDirectHomeComponent } from './amadeus-direct-home/amadeus-direct-home.component';
import { AmadeusDirectModalComponent } from './amadeus-direct-modal/amadeus-direct-modal.component';
import {TasksModule} from '@uxdf/taskmanager/src/app/tasks/tasks.module';
import {environment} from '@uxdf/taskmanager/src/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { CardComponentComponent } from './card/card-component/card-component.component';
import {
  ArrowLinkModule,
  BarHeadlineModule,
  ConfirmAlertModule,
  FooterModule,
  FormGroupModule, NavbarModule,
  TileModule
} from '@uxdf/p-components';
import {SearchClientService} from '@uxdf/search-and-book/src/app/search/services/search-client.service';
import {SearchClientMockService} from '@uxdf/search-and-book/src/app/search/services/search-client-mock.service';
import { AmadeusDirectIframeComponent } from './amadeus-direct-iframe/amadeus-direct-iframe.component';
import { EmptyTileComponent } from './empty-tile/empty-tile.component';
import { IframeService } from './services/iframe.service';
import { AmadeusDirectHomeContainerComponent } from './amadeus-direct-home-container/amadeus-direct-home-container.component';
import { FooterComponent } from './home-page-components/footer/footer.component';
import { SideNavigationBarComponent } from './home-page-components/side-navigation-bar/side-navigation-bar.component';
import {PageLayoutComponent} from './page-layout/page-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    AmadeusDirectHomeComponent,
    AmadeusDirectModalComponent,
    CardComponentComponent,
    AmadeusDirectIframeComponent,
    EmptyTileComponent,
    AmadeusDirectHomeContainerComponent,
    PageLayoutComponent,
    FooterComponent,
    SideNavigationBarComponent,
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
    ArrowLinkModule,
    BarHeadlineModule,
    TileModule,
    NavbarModule,
    FooterModule,
    ConfirmAlertModule,
    FormGroupModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    [{provide: SearchClientService, useClass: SearchClientMockService}],
    IframeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
