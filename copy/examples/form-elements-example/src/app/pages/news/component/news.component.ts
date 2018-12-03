import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EntityObject } from "@uxdf/ioc-model";
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'app-page-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsComponent implements OnInit {

  news: EntityObject;
  sortByDate: EntityObject;
  sortByCats: EntityObject;

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {
    this.load();
    this.loadDropdownSotByDate();
    this.loadDropdownSotByCats();
  }

  load() {
    this.engine.pageService().loadMapper('GET_NEWS_LIST').subscribe(news => {
      this.news = news;
    });
  }

  loadDropdownSotByDate() {
    this.engine.pageService().loadMapper('GET_DROPDOWN_SORT_BY_DATE').subscribe(dropdownSortByDate => {
      this.sortByDate = dropdownSortByDate;
    });
  }

  loadDropdownSotByCats() {
    this.engine.pageService().loadMapper('GET_DROPDOWN_SORT_BY_CATS').subscribe(dropdownSortByCats => {
      this.sortByCats = dropdownSortByCats;
    });
  }

}
