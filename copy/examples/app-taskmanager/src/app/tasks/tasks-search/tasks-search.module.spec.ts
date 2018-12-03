import { TasksSearchModule } from './tasks-search.module';

describe('TasksModule', () => {
  let tasksModule: TasksSearchModule;

  beforeEach(() => {
    tasksModule = new TasksSearchModule();
  });

  it('should create an instance', () => {
    expect(tasksModule).toBeTruthy();
  });
});
