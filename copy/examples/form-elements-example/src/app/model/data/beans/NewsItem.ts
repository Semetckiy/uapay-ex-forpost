import { EntityObject, EString } from "@uxdf/ioc-model";
import { NewsCat } from "./NewsCat";

export class NewsItem extends EntityObject {
  constructor() {
    super("NewsItem");
  }

  date: EString;
  title: EString;
  desc: EString;
  link: EString;
  cats: NewsCat[];

}
