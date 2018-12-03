import { EntityObject, EString } from "@uxdf/ioc-model";

export class NewsCat extends EntityObject {

  constructor() {
    super("NewsCat");
  }

  title: EString;

}
