import { EntityObject, EString } from "@uxdf/ioc-model";

export class PersonBusiness extends EntityObject {

  constructor() {
    super("PersonBusiness");
  }

  id: EString;
  value: EString;

}
