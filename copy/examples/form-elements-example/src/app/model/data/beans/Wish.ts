import {EDate, EntityObject, EString} from "@uxdf/ioc-model";

export class Wish extends EntityObject {
  constructor() {
    super("Wish");
  }

  test: EString;
  date: EDate;

} 