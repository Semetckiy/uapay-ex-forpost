import { Injectable } from '@angular/core';
import { NewsList } from "../../../model/data/services/NewsList";
import { DropdownSortByDateList } from "../../../model/data/services/DropdownSortByDateList";
import { DropdownSortByCatsList } from "../../../model/data/services/DropdownSortByCatsList";
import { EngineService } from "@uxdf/ioc-engine";
import { HttpClient } from "@angular/common/http";
import { PageService } from "@uxdf/ioc-engine";

@Injectable({
  providedIn: 'root'
})

export class NewsService extends PageService {

  constructor(
    private engine: EngineService,
    private http: HttpClient
  ) {
    super();
    engine.registerMapper(new NewsList(http));
    engine.registerMapper(new DropdownSortByDateList(http));
    engine.registerMapper(new DropdownSortByCatsList(http));
  }

  loadMapper(name) {
    return this.engine.getMapperById(name).load();
  }

  getMenuItems() {
    return [{
      title: "Home",
      link: "/page1"
    }, {
      title: "About us",
      link: "/page2"
    }, {
      title: "FAQ",
      link: "/page1"
    }, {
      title: "Terms",
      link: "/page1"
    }, ]
  }

  getFooterItems() {

    const data = {
      'logoPath': '/',
      'copyright': '© Amadeus IT Group SA',
      'terms': [
        {
          'caption': 'Terms of Use',
          'path': '/term-of-use'
        },
        {
          'caption': 'Cookies Policy',
          'path': '/cookies-policy'
        },
        {
          'caption': 'Privacy Policy',
          'path': '/privacy-policy'
        }
      ],
      'socials': [
        {
          'caption': 'facebook',
          'path': '/facebook'
        },
        {
          'caption': 'twitter',
          'path': '/twitter'
        },
        {
          'caption': 'linkedin',
          'path': '/linkedin'
        },
        {
          'caption': 'youtube',
          'path': '/youtube'
        }
      ]
    };

    // console.log('load footer data: ', data);
    return data;
  }

}
