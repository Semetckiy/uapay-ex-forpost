export interface FilterRangeValue {
  min: number;
  max: number;
}

export interface FilterRangeOptions {
  range: FilterRangeValue;
  unit: string;
}

export type FilterValue = string[] | FilterRangeValue;

export enum FilterType {
  Checkbox = 'checkbox',
  Range = 'range',
}

export interface Filter {
  name: string;
  title: string;
  type: FilterType;
  value: FilterValue;
  defaultValue: FilterValue;
  order: number;
  [propName: string]: any;
}

export interface FilterCheckbox extends Filter {
  defaultValue: string[];
  value: string[];
  options: FilterOption[];
}

export interface FilterRange extends Filter {
  defaultValue: FilterRangeValue;
  value: FilterRangeValue;
  range: FilterRangeValue;
  unit: string;
  step: number;
}

export interface FilterOption {
  name: string;
  title: string;
}

export interface ReceivedFilterValue {
  [key: string]: FilterOption[] | FilterRangeOptions;
}

export interface FilterSet {
  [key: string]: Filter;
}
