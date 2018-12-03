import { FooterConfigType, HeaderConfigType, LayoutModule } from "@uxdf/p-components";
import { NgModule } from '@angular/core';

const headerConfig: HeaderConfigType = {
  appName: "Direct",
  headerLinks: [{
    label: 'FAQ'
  },{
    label: 'Service Hub'
  },{
    label: 'Logout'
  }],
  navLinks: [{
    label: 'Homepage',
    routerLink: ['home']
  },{
    label: 'Dashboard'
  },{
    label: 'News'
  },{
    label: 'Amadeus Store'
  },{
    label: 'Search & Book'
  }, {
    label: 'Tasks',
    routerLink: ['tasks']
  }],
  iconLinks: [{
    icon: 'icon-search'
  },{
    icon: 'icon-shopping-cart',
    badge: 1
  }]
};

const footerConfig: FooterConfigType = {
  columns: [{
    title: 'About Amadeus',
    listItems:[{
      label: 'Amadeus Store'
    },{
      label: 'News'
    },{
      label: 'Amadeus.com'
    }]
  },{
    title: 'My Account',
    listItems:[{
      label: 'Profile details'
    },{
      label: 'Agency Details'
    },{
      label: 'Orders'
    },{
      label: 'Inventory'
    },{
      label: 'Agency Wishlist'
    }]
  },{
    title: 'My Business',
    listItems:[{
      label: 'Dashboard'
    },{
      label: 'Service Hub'
    }]
  },{
    title: 'Contact Us',
    listItems:[{
      text: 'Amadeus Marketing (Schweiz) AG Pfingstweidstrasse 60, 8005 Zürich/Switzerland +41 44 217 97 97',
    },{
      label: 'ask a question'
    }]
  }
  ],
  legalLinks: [{
    label: 'Terms of Use'
  },{
    label: 'Cookies Policy'
  },{
    label: 'Privacy Policy'
  }]
};

@NgModule({
  imports: [
    LayoutModule.forRoot(headerConfig, footerConfig)
  ],
  exports: [LayoutModule]
})
export class AppLayoutModule { }
