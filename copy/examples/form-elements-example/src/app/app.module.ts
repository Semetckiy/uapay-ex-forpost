import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ComponentsModule } from 'components';
import { RouterModule } from "@angular/router";

import { AppComponent } from './pages/_layout/app.component';
import { AppService } from "./pages/_layout/service/app.service";

import { NewsComponent } from "./pages/news/component/news.component";
import { NewsService } from "./pages/news/service/news.service";

import { StoreComponent } from "./pages/store/component/store.component";
import { StoreService } from "./pages/store/service/store.service";

import { HomepageComponent } from "./pages/homepage/component/homepage.component";
import { HomepageService } from "./pages/homepage/service/homepage.service";

import { DashboardComponent } from "./pages/dashboard/component/dashboard.component";
import { DashboardService } from "./pages/dashboard/service/dashboard.service";

import { AccountProfileComponent } from "./pages/account-profile/component/account-profile.component";
import { AccountProfileService } from "./pages/account-profile/service/account-profile.service";

import { AccountAgencyComponent } from "./pages/account-agency/component/account-agency.component";
import { AccountAgencyService } from "./pages/account-agency/service/account-agency.service";


import { HttpClientModule } from '@angular/common/http';
import { EngineService} from "@uxdf/ioc-engine";

import { User } from "./model/data/beans/User";
import  {BLUser } from "./model/data/businessLogic/BLUser";

import { News } from "./model/data/beans/News";
import { BLNewsList } from "./model/data/businessLogic/BLNewsList";

import { DropdownSortByDate } from "./model/data/beans/DropdownSortByDate";
import { BLDropdownSortByDate } from "./model/data/businessLogic/BLDropdownSortByDate";

import { DropdownSortByCats } from "./model/data/beans/DropdownSortByCats";
import { BLDropdownSortByCats } from "./model/data/businessLogic/BLDropdownSortByCats";

import { Profile } from "./model/data/beans/Profile";
import { BLProfile } from "./model/data/businessLogic/BLProfile";

import { Agency } from "./model/data/beans/Agency";
import { BLAgency } from "./model/data/businessLogic/BLAgency";

import { Config } from "./model/data/beans/Config";
import { BLConfig } from "./model/data/businessLogic/BLConfig";

import { Utils } from "./model/data/businessLogic/Utils";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const engineConfig = {
  services: [
    {
      page: NewsComponent,
      service: NewsService,
    },
    {
      page: StoreComponent,
      service: StoreService,
    },
    {
      page: HomepageComponent,
      service: HomepageService,
    },
    {
      page: DashboardComponent,
      service: DashboardService,
    },
    {
      page: AccountProfileComponent,
      service: AccountProfileService,
    },
    {
      page: AccountAgencyComponent,
      service: AccountAgencyService,
    }
  ],
  domainDefinition: {
    User: {
      id: {
        type: 'number',
        description: '',
        required: true
      },
      name: {
        type: 'string',
        description: '',
        required: true
      },
      email: {
        type: 'string',
        description: '',
        required: true
      }
    },
    News: {
      list: {
        type: 'array',
        description: '',
        required: true
      }
    },
    DropdownSortByDate: {
      options: {
        type: 'array',
        description: '',
        required: true
      }
    },
    DropdownSortByCats: {
      options: {
        type: 'array',
        description: '',
        required: true
      }
    },
    Profile: {
      personTitles: {
        type: 'array',
        description: '',
        required: true
      },
      personJobs: {
        type: 'array',
        description: '',
        required: true
      },
      personContactLang: {
        type: 'array',
        description: '',
        required: true
      },
      personBusiness: {
        type: 'array',
        description: '',
        required: true
      },
      title: {
        type: 'string',
        description: '',
        required: true
      },
      firstName: {
        type: 'string',
        description: '',
        required: true
      },
      lastName: {
        type: 'string',
        description: '',
        required: true
      },
      firstLocalName: {
        type: 'string',
        description: '',
        required: true
      },
      lastLocalName: {
        type: 'string',
        description: '',
        required: true
      },
      jobTitle: {
        type: 'string',
        description: '',
        required: true
      },
      jobPosition: {
        type: 'string',
        description: '',
        required: true
      },
      contactLang: {
        type: 'string',
        description: '',
        required: true
      },
      primaryBusiness: {
        type: 'string',
        description: '',
        required: true
      },
      email: {
        type: 'string',
        description: '',
        required: true
      },
      workPhone: {
        type: 'string',
        description: '',
        required: true
      },
      mobilePhone: {
        type: 'string',
        description: '',
        required: true
      },
      amadeusOffice: {
        type: 'string',
        description: '',
        required: true
      },
      address: {
        type: 'string',
        description: '',
        required: true
      },
      city: {
        type: 'string',
        description: '',
        required: true
      },
      zip: {
        type: 'string',
        description: '',
        required: true
      },
      state: {
        type: 'string',
        description: '',
        required: true
      },
      country: {
        type: 'string',
        description: '',
        required: true
      },
      timeZone: {
        type: 'string',
        description: '',
        required: true
      },
      isPersonalizedOffers: {
        type: 'string',
        description: '',
        required: true
      },
      isAdmin: {
        type: 'string',
        description: '',
        required: true
      },
    },
    Agency: {
      name: {
        type: 'string',
        description: '',
        required: true
      },
      code: {
        type: 'string',
        description: '',
        required: true
      }
    },
    Config: {
      header: {
        type: 'string',
        description: '',
        required: true
      },
      footer: {
        type: 'string',
        description: '',
        required: true
      }
    }
  },
  businessLogic: [
    {
      entity: User,
      logic: BLUser
    },
    {
      entity: News,
      logic: BLNewsList
    },
    {
      entity: DropdownSortByDate,
      logic: BLDropdownSortByDate
    },
    {
      entity: DropdownSortByCats,
      logic: BLDropdownSortByCats
    },
    {
      entity: Profile,
      logic: BLProfile
    },
    {
      entity: Agency,
      logic: BLAgency
    }
  ],
};

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    StoreComponent,
    HomepageComponent,
    DashboardComponent,
    AccountProfileComponent,
    AccountAgencyComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component : HomepageComponent
      },
      {
        path: 'homepage',
        component : HomepageComponent
      },
      {
        path: 'dashboard',
        component : DashboardComponent
      },
      {
        path: 'news',
        component : NewsComponent
      },
      {
        path: 'amadeus-store',
        component : StoreComponent
      },
      {
        path: 'account/profile',
        component : AccountProfileComponent
      },
      {
        path: 'account/agency',
        component : AccountAgencyComponent
      },
      {
        path: '**',
        component : HomepageComponent
      }
    ])
  ],
  providers: [
    AppService,
    NewsService,
    StoreService,
    HomepageService,
    DashboardService,
    AccountProfileService,
    AccountAgencyService,

    BLUser,
    BLNewsList,
    BLDropdownSortByDate,
    BLDropdownSortByCats,
    BLProfile,
    BLAgency,
    BLConfig,
    Utils,
    {
      provide: 'engineConfig',
      useValue: engineConfig
    },
    EngineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
