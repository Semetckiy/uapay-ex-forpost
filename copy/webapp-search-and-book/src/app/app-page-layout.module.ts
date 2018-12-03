import { NgModule } from '@angular/core';
import {FooterConfigType, HeaderConfigType, LayoutModule} from "@uxdf/p-components";

const headerConfig: HeaderConfigType = {
  appName: "Direct",
  headerLinks: [{
    label: 'FAQ',
    href: 'amadeus-direct.com/faq'
  },{
    label: 'Service Hub',
    href: 'servicehub.com'
  },{
    label: 'Logout'
  }],
  navLinks: [{
    label: 'Homepage',
    routerLink: ['/']
  },{
    label: 'Dashboard',
    routerLink: ['page1']
  },{
    label: 'Amadeus Store',
    routerLink: ['page2']
  },{
    label: 'News',
    id: 'news',
    routerLink: ['page1'],
    badge: 3
  },{
    label: 'My Account',
    links: [{
      label: 'Account details',
      href: "#accountdetails"
    },{
      label: 'Account details',
      href: '#agencydetails'
    },{
      label: 'Orders',
      href: '#orders'
    },{
      label: 'Inventory',
      href: '#inventory'
    },{
      label: 'Invoices',
      href: '#invoices',
      badge: 99
    },{
      label: 'Agency wishlist',
      href: '#wishlist'
    },{
      label: 'Submenu',
      links: [{
        label: 'This just',
        href: "#accountdetails"
      },{
        icon: 'icon-money',
        href: "#accountdetails"
      },{
        label: 'shows',
        href: '#agencydetails'
      },{
        label: 'whats possible',
        href: '#orders',
        badge: 1
      }]
    }]
  }],
  iconLinks: [{
    icon: 'icon-search',
    href: '#search'
  },{
    icon: 'icon-shopping-cart',
    href: '#cart',
    id: 'cart',
    badge: 0
  }]
};

const footerConfig: FooterConfigType = {
  columns: [{
    title: 'About Amadeus',
    listItems:[{
      label: 'Amadeus Store'
    },{
      label: 'News',
      routerLink: ['abc']
    },{
      label: 'Amadeus.com',
      href: 'https://amadeus.com'
    }]
  },{
    title: 'My Account',
    listItems:[{
      label: 'Profile details'
    },{
      label: 'Agency Details',
      routerLink: ['abc']
    },{
      label: 'Orders',
      href: 'https://amadeus.com'
    },{
      label: 'Inventory',
      href: '/link'
    },{
      label: 'Agency Wishlist',
      href: '/link'
    }]
  },{
    title: 'My Business',
    listItems:[{
      label: 'Dashboard'
    },{
      label: 'Service Hub',
      routerLink: ['abc']
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
