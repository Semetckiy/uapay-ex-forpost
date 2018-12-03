import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Task, Count } from "../models/index";
import { Observable, of } from "rxjs";
import { TasksParserFormatterService } from "./tasks-parser-formatter.service";
import { map, switchMap } from "rxjs/operators";

export type GetTasksResponseType = {
  tasks: Task[],
  counters: Count
}

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  constructor(@Inject('API_BASE') private API_BASE: string,
              private httpClient: HttpClient,
              private tasksParserFormatterService: TasksParserFormatterService
              ) {
  }

  addTask(task: Task): Observable<Task> {
    return of(task).pipe(
      map((task: Task) => this.tasksParserFormatterService.formatTask(task)),
      switchMap((task: Task) => {
        return this.httpClient.post<Task>(this.API_BASE + 'tasks/', task).pipe(
          map((task: Task) => this.tasksParserFormatterService.parseTask(task)),
        );
      })
    );

  }

  updateTask(task: Task): Observable<Task> {
    return of(task).pipe(
      map((task: Task) => this.tasksParserFormatterService.formatTask(task)),
      switchMap((task: Task) => {
        return this.httpClient.put<Task>(this.API_BASE + 'tasks/' + task.id, task).pipe(
          map((task: Task) => this.tasksParserFormatterService.parseTask(task))
        );
      })
    );
  }

  getTasks(query = {}): Observable<GetTasksResponseType> {
    // makes sure that empty values wont be added to querystring: e.g: {someFilter: ''} wont be added
    const emptyFilteredQuery = Object.keys(query).reduce((acc, curr) => {
      if(query[curr]){
        acc[curr] = query[curr];
      }
      return acc;
    }, {});
    let params = new HttpParams({fromObject: emptyFilteredQuery});
    params = params.set('pageSize', '1000');
    params = params.set('pageIndex', '0');
    params = params.set('clientDate', new Date().toISOString().substr(0, 'yyyy-MM-dd'.length));
    return this.httpClient.get<GetTasksResponseType>(this.API_BASE + 'tasks/', { params } ).pipe(
      map((res: GetTasksResponseType) => ({
          ...res,
          tasks: this.tasksParserFormatterService.parseTasks(res.tasks)

      }))
    );
  }
}
