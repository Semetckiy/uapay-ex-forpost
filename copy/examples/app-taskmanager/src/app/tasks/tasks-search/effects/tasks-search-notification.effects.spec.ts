import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TasksSearchNotificationEffects } from './tasks-search-notification.effects';
import { StoreModule } from "@ngrx/store";
import * as fromFeature from "../reducers";
import { Actions } from "@ngrx/effects";
import { getTestScheduler } from "jasmine-marbles";
import { TASK_MOCK } from "../../common/models/mocks";
import { ClearNotification, CreateTaskSuccess, UpdateTaskSuccess } from "../../common/actions/task-search.actions";

describe('TasksSearchNotificationEffects', () => {
  let actions$: Observable<any>;
  let effects: TasksSearchNotificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('taskSearch', fromFeature.reducers)
      ],
      providers: [
        provideMockActions(() => actions$),
        TasksSearchNotificationEffects,
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(TasksSearchNotificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('hideNotification$', () => {
    it('should dispatch ClearNotification 5s after CreateTaskSuccess', () => {
      const scheduler = getTestScheduler();

      scheduler.run((helpers) => {
        actions$ = helpers.hot('-a', { a: new CreateTaskSuccess({task: { ...TASK_MOCK, title: 'Updated title'}})});
        helpers.expectObservable(effects.hideNotification$).toBe('- 5s b', { b: new ClearNotification()});
      })
    });

    it('should dispatch ClearNotification 5s after UpdateTaskSuccess', () => {
      const scheduler = getTestScheduler();

      scheduler.run((helpers) => {
        actions$ = helpers.hot('-a', { a: new UpdateTaskSuccess({task: { id: TASK_MOCK.id, changes: {...TASK_MOCK}}})});
        helpers.expectObservable(effects.hideNotification$).toBe('- 5s b', { b: new ClearNotification()});
      })
    });

  });


});
