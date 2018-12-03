import { EntityObject, EString } from "@uxdf/ioc-model";

export class PersonTitle extends EntityObject {

  constructor() {
    super("PersonTitle");
  }

  id: EString;
  value: EString;

}
