import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListLinksComponent implements OnInit {

  @Input() links: {};


  constructor() { }

  ngOnInit() {
    this.links = [
      {
        'items': {
          'header': 'About Amadeus',
          'links': [
            {
              'caption': 'Amadeus Store',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'NewsItem',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'Amadeus.com',
              'link': '/',
              'targetBlank': true
            }
          ]
        }
      },
      {
        'items': {
          'header': 'My Account',
          'links': [
            {
              'caption': 'Profile details',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'Agency details',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'Orders',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'Inventory',
              'link': '/',
              'targetBlank': true
            },
            {
              'caption': 'Agency wishlists',
              'link': '/',
              'targetBlank': true
            }
          ]
        }
      },
      {
        'items': {
          'header': 'My Business',
          'links': [
            {
              'caption': 'Dashboard',
              'link': '/',
              'targetBlank': false
            },
            {
              'caption': 'Service Hub',
              'link': '/',
              'targetBlank': true
            }
          ]
        }
      },
      {
        'items': {
          'header': 'Contact us',
          'address': 'Amadeus Marketing (Schweiz) AG <br> Pfingstweidstrasse 60, 8005 Zurich/Switzerland <br>+41 44 217 97 97',
          'links': [
            {
              'caption': 'Contact us',
              'link': '/',
              'targetBlank': false
            }
          ]
        }
      }
    ];


  }


}
