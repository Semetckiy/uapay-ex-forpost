import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleRef } from '@angular/core';
import { LoginModule } from '@seco/login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule as SecoHttpModule } from '@seco/dev-utils';

import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from './root.reducers';
import { TranslateModule, CONFIG_TOKEN, HTTP_CONFIG_TOKEN } from '@seco/core';
import { EffectsModule } from '@ngrx/effects';
import { selectClpConfig, CORE_FEATURE, coreReducer } from './core.reducer';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppPageLayoutModule } from './app-page-layout.module';
import { SearchModule } from './search/search.module';
import {SearchClientService} from './search/services/search-client.service';
import {SearchClientMockService} from './search/services/search-client-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forFeature(CORE_FEATURE, coreReducer),
    SecoHttpModule.forRoot(),
    TranslateModule.forRoot(),
    EffectsModule.forRoot([]),
    LoginModule,
    AppRoutingModule,
    AppPageLayoutModule,
    SearchModule,
  ],
  providers: [
    LoginService,
    {
      provide: CONFIG_TOKEN, useValue: {
        clpAppId: 'SECO',
        language: 'en_gb'
      }
    },
    {
      provide: HTTP_CONFIG_TOKEN, useValue: {
        siteCode: '0SLW0SLW',
        language: 'GB',
        baseUrl: '/app_sell2.0'
      }
    },
    // {provide: SearchClientService, useClass: SearchClientMockService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private moduleRef: NgModuleRef<any>, private store: Store<any>, private loginService: LoginService) {
    this.moduleRef.injector.get(CONFIG_TOKEN).clpConfig = this.store.select(selectClpConfig);
    this.moduleRef.injector.get(CONFIG_TOKEN).onSuccess = this.loginService.loginByAccessToken.bind(this.loginService);
  }
}
