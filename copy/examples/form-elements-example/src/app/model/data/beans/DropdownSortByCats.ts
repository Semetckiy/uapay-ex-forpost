import { EntityObject } from "@uxdf/ioc-model";
import { DropdownSortByCatsItem } from "./DropdownSortByCatsItem";

export class DropdownSortByCats extends EntityObject {

  constructor() {
    super("DropdownSortByCats");
  }

  dropdownSortByCats: DropdownSortByCatsItem[];

}
