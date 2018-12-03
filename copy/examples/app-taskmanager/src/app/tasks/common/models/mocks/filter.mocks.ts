import { TasksFilter } from "../filter.model";

const now = new Date();

export const FILTER_MOCK: TasksFilter = {
  filterAssigneeSign: '',
  filterBookingRef: '',
  filterFromDueDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
  filterToDueDate: '',
  filterPriority: '',
  filterTitle: ''
};
