import { EntityObject, EString } from "@uxdf/ioc-model";

export class PersonContactLang extends EntityObject {

  constructor() {
    super("PersonContactLang");
  }

  id: EString;
  value: EString;

}
