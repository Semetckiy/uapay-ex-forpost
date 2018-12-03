import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaskTileNotificationEffects } from './task-tile-notification.effects';
import { StoreModule } from "@ngrx/store";
import * as fromFeature from "../reducers";
import { Actions } from "@ngrx/effects";
import { getTestScheduler } from "jasmine-marbles";
import { TASK_MOCK } from "../../common/models/mocks";
import { ClearNotification, CreateTaskSuccess } from "../../common/actions/task-tile.actions";

describe('TaskTileNotificationEffects', () => {
  let actions$: Observable<any>;
  let effects: TaskTileNotificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('taskSearch', fromFeature.reducers)
      ],
      providers: [
        provideMockActions(() => actions$),
        TaskTileNotificationEffects,
      ]
    });

    actions$ = TestBed.get(Actions);
    effects = TestBed.get(TaskTileNotificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('hideNotification$', () => {

    it('should dispatch ClearNotification 5s after CreateTaskSuccess', (done) => {
      const scheduler = getTestScheduler();

      scheduler.run((helpers) => {
        actions$ = helpers.hot('-a', { a: new CreateTaskSuccess({task: { ...TASK_MOCK, title: 'Updated title'}})});
        helpers.expectObservable(effects.hideNotification$).toBe('- 5s b', { b: new ClearNotification()});
        done();
      })
    });
  });


});
