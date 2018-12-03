import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import { Task } from "../models/index";

@Injectable({
  providedIn: 'root'
})
export class TasksParserFormatterService {

  private dateKeys = ['dueDate'];

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {
  }

  formatTask(task: Task): Task {
    return this.dateKeys.reduce((acc, curr) => {
      if(acc[curr]){
        acc[curr] = this.ngbDateParserFormatter.format(<NgbDateStruct> acc[curr])
      }
      return acc;
    }, {...task});
  }

  formatTasks(tasks: Task[]): Task[] {
    return tasks.reduce((acc, curr) => {
      acc.push(this.formatTask(curr));
      return acc;
    }, []);
  }

  parseTask(task: Task): Task {
    return this.dateKeys.reduce((acc, curr) => {
      if(acc[curr]){
        acc[curr] = this.ngbDateParserFormatter.parse(<string> acc[curr])
      }
      return acc;
    }, {...task});
  }

  parseTasks(tasks: Task[]): Task[] {
    return tasks.reduce((acc, curr) => {
      acc.push(this.parseTask(curr));
      return acc;
    }, []);
  }
}
