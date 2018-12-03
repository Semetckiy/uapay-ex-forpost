import { EntityObject } from "@uxdf/ioc-model";
import { DropdownSortByDateItem } from "./DropdownSortByDateItem";

export class DropdownSortByDate extends EntityObject {

  constructor() {
    super("DropdownSortByDate");
  }

  dropdownSortByDate: DropdownSortByDateItem[];

}
