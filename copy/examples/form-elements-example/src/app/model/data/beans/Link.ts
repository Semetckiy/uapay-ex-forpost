import { EDate, EntityObject, EString } from "@uxdf/ioc-model";

export class Link extends EntityObject {

  constructor() {
    super("Link");
  }

  title: EString;
  link: EString;

}
