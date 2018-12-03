import { EntityObject, EString } from "@uxdf/ioc-model";

export class Agency extends EntityObject {

  constructor() {
    super("Agency");
  }

  name: EString;
  code: EString;

}
