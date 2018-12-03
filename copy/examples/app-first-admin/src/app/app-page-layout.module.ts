import { NgModule } from '@angular/core';
import {FooterConfigType, HeaderConfigType, LayoutModule} from "@uxdf/p-components";

const headerConfig: HeaderConfigType = {
  appName: "First Administration System",
  headerLinks: [{
    label: 'Admin:GADI | 19-Oct-18 08:53 Fri',
    href: '#profile'
  },{
    label: 'Logout',
    href: '#logout'
  }],
  navLinks: [{
    label: 'Gifts',
    routerLink: ['gifts']
  },{
    label: 'Users',
    routerLink: ['users']
  },{
    label: 'Dictionary',
    links: [{
      label: 'Keys',
      routerLink: ['key']
    },{
      label: 'Dictionary',
      routerLink: ['dictionary']
    },{
      label: 'Custom',
      routerLink: ['wordcustom']
    }]
  },{
    label: 'Texts',
    links: [{
      label: 'Names',
      routerLink: ['keytext']
    },{
      label: 'Texts',
      routerLink: ['texts']
    },{
      label: 'Custom',
      routerLink: ['textcustom']
    }]
  }/*,{
    label: 'Add Points',
    routerLink: []
  },{
    label: 'UseGifts',
    id: 'news',
    routerLink: [],
    badge: 3
  },{
    label: 'Properties',
    links: [{
      label: 'Dictionary',
      href: "#dictionary"
    },{
      label: 'Countries',
      href: '#countries'
    },{
      label: 'NMC/Regions',
      href: '#nmc-regions'
    },{
      label: 'Agents',
      href: '#agents'
    },{
      label: 'PNR_queue',
      href: '#pnr-queue',
      badge: 99
    },{
      label: 'OfficeIDs',
      href: '#officeids'
    },{
      label: 'Sitetexts',
      href: '#sitetexts'
    }]
  }*/],
  iconLinks: []
};

const footerConfig: FooterConfigType = {
  columns: [],
  legalLinks: [{
    label: 'Terms of Use'
  },{
    label: 'Cookies Policy',
    routerLink: ['abc']
  },{
    label: 'Privacy Policy',
    href: 'https://amadeus.com'
  }]
};

@NgModule({
  imports: [
    LayoutModule.forRoot(headerConfig, footerConfig)
  ],
  exports: [LayoutModule]
})
export class AppPageLayoutModule { }
