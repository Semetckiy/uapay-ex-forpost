import { EntityObject, EString } from "@uxdf/ioc-model";

export class DropdownSortByDateItem extends EntityObject {
  constructor() {
    super("DropdownSortByDateItem");
  }

  id: EString;
  value: EString;

}
