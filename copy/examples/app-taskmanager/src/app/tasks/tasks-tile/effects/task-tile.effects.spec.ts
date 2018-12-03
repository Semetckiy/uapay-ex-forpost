import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaskTileEffects } from './task-tile.effects';
import { Actions } from "@ngrx/effects";
import { cold, hot } from "jasmine-marbles";
import { Task } from "../../common/models";
import { TASK_MOCK, TASKS_MOCK } from "../../common/models/mocks";
import { TasksHttpService } from "../../common/services/tasks-http.service";
import { TasksParserFormatterService } from "../../common/services/tasks-parser-formatter.service";
import {
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  ResolveTask,
  ResolveTaskError,
  ResolveTaskSuccess,
  Select
} from "../../common/actions/task-tile.actions";
import { Go } from "../../common/actions/routing.actions";
import { Update } from "@ngrx/entity";

describe('TaskTileEffects', () => {
  let actions$: Observable<any>;
  let effects: TaskTileEffects;
  let tasksHttp: TasksHttpService;
  let tasksParserFormatterService: TasksParserFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: TasksHttpService, useValue: {
          getTasks: () => {},
          addTask: () => {},
          updateTask: () => {}
        }},
        TaskTileEffects,
        provideMockActions(() => actions$)
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(TaskTileEffects);
    tasksHttp = TestBed.get(TasksHttpService);
    tasksParserFormatterService = TestBed.get(TasksParserFormatterService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('createTask$', () => {
    it('should merge original & update and dispatch CreateTaskSuccess', () => {
      spyOn(tasksHttp, 'addTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('--b', { b: new CreateTaskSuccess({task: { ...TASK_MOCK, title: 'Updated title'}})});
      actions$ = hot('-a', { a: new CreateTask({original: {...TASK_MOCK}, update: <Task> { title: 'Updated title'}})});

      expect(effects.createTask$).toBeObservable(expected);
    });

    it('should should dispatch CreateTaskError', () => {
      spyOn(tasksHttp, 'addTask').and.callFake((task) => cold('-#|'));

      const expected = cold('--b', { b: new CreateTaskError({e: 'error'})});
      actions$ = hot('-a', { a: new CreateTask({original: {...TASK_MOCK}, update: <Task> { title: 'Updated title'}})});

      expect(effects.createTask$).toBeObservable(expected);
    });
  });

  describe('resolveTask$', () => {
    it('should set done to true and dispatch ResolveTaskSuccess', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('--b', { b: new ResolveTaskSuccess({
          task: {
            id: TASK_MOCK.id,
            changes: {... TASK_MOCK, done: true}
          }
      })});
      actions$ = hot('-a', { a: new ResolveTask({task: {...TASK_MOCK}, checked: true})});

      expect(effects.resolveTask$).toBeObservable(expected);
    });

    it('should set done to false and dispatch ResolveTaskSuccess', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('--b', { b: new ResolveTaskSuccess({
          task: {
            id: TASK_MOCK.id,
            changes: {... TASK_MOCK, done: false}
          }
        })});
      actions$ = hot('-a', { a: new ResolveTask({task: {...TASK_MOCK}, checked: false})});

      expect(effects.resolveTask$).toBeObservable(expected);
    });

    it('should should dispatch ResolveTaskError', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-#|'));

      const expected = cold('--b', { b: new ResolveTaskError({e: 'error', originalTask: TASK_MOCK})});
      actions$ = hot('-a', { a: new ResolveTask({task: {...TASK_MOCK}, checked: !TASK_MOCK.done})});

      expect(effects.resolveTask$).toBeObservable(expected);
    });

    it('should handle race conditions', () => {
      spyOn(tasksHttp, 'updateTask').and.returnValues(
        cold('-----a|', {a: {...TASK_MOCK, done: true}}),
        cold('-b|', {b: {...TASK_MOCK, done: false}})
      );

      const expected = cold('----b', { b: new ResolveTaskSuccess({
          task: {
            id: TASK_MOCK.id,
            changes: {... TASK_MOCK, done: false}
          }
        })});
      actions$ = hot('-a-a', { a: new ResolveTask({task: {...TASK_MOCK}, checked: false})});

      expect(effects.resolveTask$).toBeObservable(expected);
    });

    it('should handle race conditions for seperate tasks', () => {
      spyOn(tasksHttp, 'updateTask').and.returnValues(
        cold('-----a|', {a: {...TASK_MOCK, done: true}}),
        cold('-b|', {b: {...TASK_MOCK, done: false}})
      );

      const expected = cold('----a-b', {
        a: new ResolveTaskSuccess({task: {id: TASK_MOCK.id, changes: {... TASK_MOCK, done: false}}}),
        b: new ResolveTaskSuccess({task: {id: TASK_MOCK.id, changes: {... TASK_MOCK, done: true}}})
      });
      actions$ = hot('-a-b', {
        a: new ResolveTask({task: {...TASK_MOCK}, checked: true}),
        b: new ResolveTask({task: {...TASK_MOCK, id: 9999999}, checked: true})
      });

      expect(effects.resolveTask$).toBeObservable(expected);
    });

  });

  describe('loadTasks$', () => {
    it('should dispatch LoadTasksSuccess', () => {
      spyOn(tasksHttp, 'getTasks').and.callFake(() => cold('-t|', {t: {tasks: TASKS_MOCK}}));

      const expected = cold('--b', { b: new LoadTasksSuccess({tasks: TASKS_MOCK})});
      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
    });

    it('should should dispatch LoadTasksError', () => {
      spyOn(tasksHttp, 'getTasks').and.callFake(() => cold('-#'));

      const expected = cold('--b', { b: new LoadTasksError({e: 'error'})});
      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
    });

    it('should handle race conditions', () => {
      spyOn(tasksHttp, 'getTasks').and.returnValues(
        cold('--t|', {t: {tasks: []}}),
        cold('-t|', {t: {tasks: TASKS_MOCK}})
      );

      const expected = cold('----b', { b: new LoadTasksSuccess({tasks: TASKS_MOCK})});
      actions$ = hot('-a-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
    });

  });

  describe('routeToTask$', () => {
    it('should dispatch Go', () => {

      const expected = cold('--b', { b: new Go({path: ['tasks']})});
      actions$ = hot('--a', { a: new Select({task: TASK_MOCK})});

      expect(effects.routeToTask$).toBeObservable(expected);
    });

  });

  describe('refresh$', () => {

    it('should dispatch LoadTasks', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('-a--', { a: new LoadTasks()});

      const c = new CreateTaskSuccess({task: {} as Task});
      const r = new ResolveTaskSuccess({task: {} as Update<Task>});

      actions$ = hot('-c-r', { c,r });

      expect(effects.refresh$).toBeObservable(expected);
    });

  });

});
