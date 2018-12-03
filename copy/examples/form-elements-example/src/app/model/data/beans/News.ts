import { EntityObject } from "@uxdf/ioc-model";
import { NewsItem } from "./NewsItem";

export class News extends EntityObject {

  constructor() {
    super("News");
  }

  news: NewsItem[];

}
