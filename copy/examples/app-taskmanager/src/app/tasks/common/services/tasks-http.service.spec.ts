import { TestBed } from '@angular/core/testing';

import { TasksHttpService } from './tasks-http.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { TASK_MOCK, TASKS_MOCK } from "../models/mocks/index";
import { TasksParserFormatterService } from "./tasks-parser-formatter.service";
import { cold } from "jasmine-marbles";

describe('TasksHttpService', () => {

  let service: TasksHttpService;
  let httpMock: HttpClient;
  let tasksParserFormatterService: TasksParserFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbDatepickerModule.forRoot(),
        HttpClientModule
      ],
      providers: [
        { provide: 'API_BASE', useValue: 'http://amadeus-direct.com/' },
        {
          provide: TasksParserFormatterService,
          useValue: {
            parseTask: (x) => x,
            parseTasks: (x) => x,
            formatTask: (x) => x,
            formatTasks: (x) => x
          }
        },
        {
          provide: HttpClient,
          useValue: {
            get: () => {},
            put: () => {},
            post: () => {}
          }
        },
        TasksHttpService
      ]
    });

    service = TestBed.get(TasksHttpService);
    httpMock = TestBed.get(HttpClient);
    tasksParserFormatterService = TestBed.get(TasksParserFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addTask', () => {
    it('should add task via post', () => {

      const expected = cold('-a|', {a: {...TASK_MOCK}});
      spyOn(httpMock, 'post').and.returnValue(cold('-a|', {a: {...TASK_MOCK}}));

      expect(service.addTask({...TASK_MOCK})).toBeObservable(expected);
      expect(httpMock.post).toHaveBeenCalledWith('http://amadeus-direct.com/tasks/', {...TASK_MOCK});
    });

    it('should format and parse', () => {
      spyOn(tasksParserFormatterService, 'parseTask').and.callThrough();
      spyOn(tasksParserFormatterService, 'formatTask').and.callThrough();

      const expected = cold('-a|', {a: {...TASK_MOCK}});
      spyOn(httpMock, 'post').and.returnValue(cold('-a|', {a: {...TASK_MOCK}}));

      expect(service.addTask({...TASK_MOCK})).toBeObservable(expected);
      expect(tasksParserFormatterService.parseTask).toHaveBeenCalled();
      expect(tasksParserFormatterService.formatTask).toHaveBeenCalled();
    });

  });

  describe('updateTask', () => {
    it('should update task via put', () => {
      const expected = cold('-a|', {a: {...TASK_MOCK}});
      spyOn(httpMock, 'put').and.returnValue(cold('-a|', {a: {...TASK_MOCK}}));

      expect(service.updateTask({...TASK_MOCK})).toBeObservable(expected);
      expect(httpMock.put).toHaveBeenCalledWith('http://amadeus-direct.com/tasks/1', {...TASK_MOCK});
    });

    it('should format and parse', () => {
      spyOn(tasksParserFormatterService, 'parseTask').and.callThrough();
      spyOn(tasksParserFormatterService, 'formatTask').and.callThrough();

      const expected = cold('-a|', {a: {...TASK_MOCK}});
      spyOn(httpMock, 'put').and.returnValue(cold('-a|', {a: {...TASK_MOCK}}));

      expect(service.updateTask({...TASK_MOCK})).toBeObservable(expected);
      expect(tasksParserFormatterService.formatTask).toHaveBeenCalled();
      expect(tasksParserFormatterService.parseTask).toHaveBeenCalled();
    });
  });

  describe('getTasks', () => {
    it('should request tasks via get', () => {
      const expected = cold('-a|', {a: {tasks: TASKS_MOCK}});

      const mock = spyOn(httpMock, 'get').and.returnValue(cold('-a|', {a: {tasks: TASKS_MOCK}}));

      expect(service.getTasks()).toBeObservable(expected);
      expect(mock.calls.argsFor(0)[0]).toEqual('http://amadeus-direct.com/tasks/');
    });

    it('should parse tasks', () => {
      spyOn(tasksParserFormatterService, 'parseTasks').and.callThrough();
      const expected = cold('-a|', {a: {tasks: TASKS_MOCK}});

      const mock = spyOn(httpMock, 'get').and.returnValue(cold('-a|', {a: {tasks: TASKS_MOCK}}));

      expect(service.getTasks()).toBeObservable(expected);
      expect(tasksParserFormatterService.parseTasks).toHaveBeenCalled();
    });

    it('should add default paging & clientDate parameters', () => {
      const expected = cold('-a|', {a: {tasks: TASKS_MOCK}});
      const mock = spyOn(httpMock, 'get').and.returnValue(cold('-a|', {a: {tasks: TASKS_MOCK}}));

      expect(service.getTasks()).toBeObservable(expected);
      const isoDate = new Date().toISOString().substr(0, 'yyyy-MM-dd'.length);
      expect(mock.calls.argsFor(0)[1].params.toString()).toEqual('pageSize=1000&pageIndex=0&clientDate=' + isoDate);
    });

    it('should apply given parameters and add default paging & clientDate parameters', () => {
      const expected = cold('-a|', {a: {tasks: TASKS_MOCK}});
      const params = {
        'other': 'param'
      };
      const mock = spyOn(httpMock, 'get').and.returnValue(cold('-a|', {a: {tasks: TASKS_MOCK}}));

      expect(service.getTasks(params)).toBeObservable(expected);
      const isoDate = new Date().toISOString().substr(0, 'yyyy-MM-dd'.length);
      expect(mock.calls.argsFor(0)[1].params.toString()).toEqual('other=param&pageSize=1000&pageIndex=0&clientDate=' + isoDate);
    });

    it('should clean empty parameters', () => {
      const expected = cold('-a|', {a: {tasks: TASKS_MOCK}});
      const params = {
        'other': 'param',
        'empty': ''
      };
      const mock = spyOn(httpMock, 'get').and.returnValue(cold('-a|', {a: {tasks: TASKS_MOCK}}));

      expect(service.getTasks(params)).toBeObservable(expected);
      const isoDate = new Date().toISOString().substr(0, 'yyyy-MM-dd'.length);
      expect(mock.calls.argsFor(0)[1].params.toString()).toEqual('other=param&pageSize=1000&pageIndex=0&clientDate=' + isoDate);
    });
  });


});
