import { EntityObject, EString } from "@uxdf/ioc-model";

export class DropdownSortByCatsItem extends EntityObject {
  constructor() {
    super("DropdownSortByCatsItem");
  }

  id: EString;
  value: EString;

}
