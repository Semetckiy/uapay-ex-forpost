import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaskSearchEffects } from './tasks-search.effects';
import { StoreModule } from "@ngrx/store";
import * as fromFeature from "../reducers";
import { Actions } from "@ngrx/effects";
import { cold, hot } from "jasmine-marbles";
import { SortSettings, Task, TasksFilter } from "../../common/models";
import { TASK_MOCK, TASKS_MOCK, COUNT_MOCK } from "../../common/models/mocks";
import { TasksHttpService } from "../../common/services/tasks-http.service";
import {
  CreateTask,
  CreateTaskError,
  CreateTaskSuccess,
  Filter,
  LoadTasks,
  LoadTasksError,
  LoadTasksSuccess,
  LoadCountSuccess,
  ResolveTask,
  ResolveTaskError,
  ResolveTaskSuccess,
  Sort,
  UpdateTask,
  UpdateTaskError,
  UpdateTaskSuccess
} from "../../common/actions/task-search.actions";
import { FilterUrlService } from "../../common/services/filter-url.service";
import { SortUrlService } from "../../common/services/sort-url.service";
import { Update } from "@ngrx/entity";

describe('TaskSearchEffects', () => {
  let actions$: Observable<any>;
  let effects: TaskSearchEffects;
  let tasksHttp: TasksHttpService;
  let filterUrlService: FilterUrlService;
  let sortUrlService: SortUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('taskSearch', fromFeature.reducers)
      ],
      providers: [
        { provide: TasksHttpService, useValue: {
          getTasks: () => {},
          addTask: () => {},
          updateTask: () => {}
        }},
        { provide: FilterUrlService, useValue: {
            fromQuery: () => {},
            toQuery: () => {},
        }},
        { provide: SortUrlService, useValue: {
            fromQuery: () => {},
            toQuery: () => {},
        }},
        provideMockActions(() => actions$),
        TaskSearchEffects,
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(TaskSearchEffects);
    tasksHttp = TestBed.get(TasksHttpService);
    filterUrlService = TestBed.get(FilterUrlService);
    sortUrlService = TestBed.get(SortUrlService);
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

  describe('loadTasks$', () => {
    const bCount = new LoadCountSuccess({count: COUNT_MOCK} );
    const bTasks = new LoadTasksSuccess({tasks: TASKS_MOCK} );
    const taskFake = () => cold('-t|', {t: {tasks: TASKS_MOCK, counters: COUNT_MOCK}});

    it('should dispatch LoadTasksSuccess', () => {
      spyOn(tasksHttp, 'getTasks').and.callFake(taskFake);
      const expected = cold('--(bc)', { b: bCount, c: bTasks });

      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
    });

    it('should should dispatch LoadTasksError', () => {
      spyOn(tasksHttp, 'getTasks').and.callFake(() => cold('-#'));

      const expected = cold('--b', { b: new LoadTasksError({e: 'error'})});
      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
    });

    it('should serialize filters', () => {
      spyOn(filterUrlService, 'toQuery').and.returnValue({});
      spyOn(tasksHttp, 'getTasks').and.callFake(taskFake);

      const expected = cold('--(bc)', { b: bCount, c: bTasks });

      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
      expect(filterUrlService.toQuery).toHaveBeenCalled();
    });

    it('should serialize sorting', () => {
      spyOn(sortUrlService, 'toQuery').and.returnValue({});
      spyOn(tasksHttp, 'getTasks').and.callFake(taskFake);

      const expected = cold('--(bc)', { b: bCount, c: bTasks });
      actions$ = hot('-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);
      expect(sortUrlService.toQuery).toHaveBeenCalled();
    });

    it('should handle race conditions', () => {
      spyOn(tasksHttp, 'getTasks').and.returnValues(
        cold('--t|', {t: {tasks: []}}),
        cold('-t|', {t: {tasks: TASKS_MOCK, counters: COUNT_MOCK}})
      );

      const expected = cold('----(bc)', { b: bCount, c: bTasks });
      actions$ = hot('-a-a', { a: new LoadTasks()});

      expect(effects.loadTasks$).toBeObservable(expected);

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
      actions$ = hot('-a-a', { a: new ResolveTask({task: {...TASK_MOCK}, checked: true})});

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

  describe('updateTask$', () => {

    it('should dispatch UpdateTask', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('--b', { b: new UpdateTaskSuccess({
          task: {
            id: TASK_MOCK.id,
            changes: {... TASK_MOCK, title: 'unit-test'}
          }
        })});
      actions$ = hot('-a', { a: new UpdateTask({original: TASK_MOCK, update: {...TASK_MOCK, title: 'unit-test'}})});

      expect(effects.updateTask$).toBeObservable(expected);
    });

    it('should should dispatch UpdateTaskError', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-#|'));

      const expected = cold('--b', { b: new UpdateTaskError({e: 'error'})});
      actions$ = hot('-a', { a: new UpdateTask({original: TASK_MOCK, update: {...TASK_MOCK, title: 'unit-test'}})});

      expect(effects.updateTask$).toBeObservable(expected);
    });

    it('should handle race conditions', () => {
      spyOn(tasksHttp, 'updateTask').and.returnValues(
        cold('-----a|', {a: {...TASK_MOCK, title: 'ignored'}}),
        cold('-b|', {b: {...TASK_MOCK, title: 'unit-test'}})
      );

      const expected = cold('----b', { b: new UpdateTaskSuccess({
          task: {
            id: TASK_MOCK.id,
            changes: {... TASK_MOCK, title: 'unit-test'}
          }
        })});
      actions$ = hot('-a-a', { a: new UpdateTask({original: TASK_MOCK, update: {...TASK_MOCK, title: 'unit-test'}})});

      expect(effects.updateTask$).toBeObservable(expected);
    });

  });

  describe('refresh$', () => {

    it('should dispatch LoadTasks', () => {
      spyOn(tasksHttp, 'updateTask').and.callFake((task) => cold('-t|', {t: task}));

      const expected = cold('-a-a-a-a--', { a: new LoadTasks()});

      const f = new Filter({filter: {} as TasksFilter});
      const s = new Sort({sorting: {} as SortSettings});
      const u = new UpdateTaskSuccess({task: {} as Update<Task>});
      const c = new CreateTaskSuccess({task: {} as Task});
      const r = new ResolveTaskSuccess({task: {} as Update<Task>});

      actions$ = hot('-f-s-u-c-r', { f,s,u,c,r });

      expect(effects.refresh$).toBeObservable(expected);
    });

  });


});
