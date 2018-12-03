import {EntityObject, EString} from "@uxdf/ioc-model";
import {Agency} from "./Agency";
import {Wish} from "./Wish";

export class User extends EntityObject {
  constructor() {
    super("User");
  }

  name: EString;
  email: EString;
  title: EString;
  firstname: EString;
  lastname: EString;
  agency: Agency;
  wishes: Wish[];


}
