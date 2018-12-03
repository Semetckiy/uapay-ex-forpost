import { TestBed } from '@angular/core/testing';
import { TasksParserFormatterService } from "./tasks-parser-formatter.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { TASK_MOCK, TASKS_MOCK } from "../models/mocks/index";

describe('TasksParserFormatterService', () => {
  let service: TasksParserFormatterService;
  let ngbDateParserFormatter: NgbDateParserFormatter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgbDateParserFormatter,
          useValue: {
            parse: () => {},
            format: () => {}
          }
        },
        TasksParserFormatterService
      ]
    });

    service = TestBed.get(TasksParserFormatterService);
    ngbDateParserFormatter = TestBed.get(NgbDateParserFormatter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('formatTask', () => {
    it('should format due date', () => {
      spyOn(ngbDateParserFormatter, 'format').and.returnValue('formatted');

      expect(service.formatTask(TASK_MOCK)).toEqual({
        ...TASK_MOCK, dueDate: 'formatted'
      })
    });
  });

  describe('formatTasks', () => {
    it('should format due dates', () => {
      spyOn(ngbDateParserFormatter, 'format').and.returnValue('formatted');

      expect(service.formatTasks(TASKS_MOCK)).toEqual([
        {...TASKS_MOCK[0], dueDate: 'formatted'},
        {...TASKS_MOCK[1], dueDate: 'formatted'}
      ]);
    });
  });

  describe('parseTask', () => {
    it('should parse due date', () => {
      spyOn(ngbDateParserFormatter, 'parse').and.returnValue('parsed');
      expect(service.parseTask(TASK_MOCK)).toEqual({
        ...TASK_MOCK, dueDate: 'parsed'
      })
    });
  });

  describe('parseTasks', () => {
    it('should parse due dates', () => {
      spyOn(ngbDateParserFormatter, 'parse').and.returnValue('parsed');

      expect(service.parseTasks(TASKS_MOCK)).toEqual([
        {...TASKS_MOCK[0], dueDate: 'parsed'},
        {...TASKS_MOCK[1], dueDate: 'parsed'}
      ]);
    });
  });
});
