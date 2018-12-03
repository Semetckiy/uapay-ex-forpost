import {EntityObject, EString} from "@uxdf/ioc-model";

export class User extends EntityObject {
  constructor() {
    super("User");
  }

  name: EString;
  email: EString;

}
