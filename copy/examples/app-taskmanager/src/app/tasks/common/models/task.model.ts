export interface Task {
  id?: number;
  title: string;
  done: boolean;
  dueDate: any;
  description?: string;
  bookingRef?: string;
  priority?: string;
  assigneeSign?: string;
}
