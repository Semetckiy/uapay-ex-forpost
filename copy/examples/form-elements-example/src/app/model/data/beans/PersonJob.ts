import { EntityObject, EString } from "@uxdf/ioc-model";

export class PersonJob extends EntityObject {

  constructor() {
    super("PersonJob");
  }

  id: EString;
  value: EString;

}
