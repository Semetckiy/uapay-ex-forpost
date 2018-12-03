import { Task } from "../task.model";

export const TASK_MOCK: Task = {
  id: 1,
  title: 'Some Title',
  done: false,
  dueDate: '2018-12-24',
  description: 'Description Text',
  bookingRef: '#123456',
  priority: '10',
  assigneeSign: 'AS123'
};

export const TASKS_MOCK: Task[] = [{
  id: 1,
  title: 'Some Title',
  done: false,
  dueDate: '2018-12-24',
  description: 'Description Text',
  bookingRef: '#123456',
  priority: '10',
  assigneeSign: 'AS123'
},{
  id: 2,
  title: 'Some Other Title',
  done: false,
  dueDate: '2018-12-25',
  description: 'Description Text',
  bookingRef: '#987654',
  priority: '20',
  assigneeSign: 'XZ123'
}];
