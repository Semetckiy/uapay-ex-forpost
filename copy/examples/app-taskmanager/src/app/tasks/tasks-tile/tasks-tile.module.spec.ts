import { TasksTileModule } from './tasks-tile.module';

describe('TasksTileModule', () => {
  let tasksTileModule: TasksTileModule;

  beforeEach(() => {
    tasksTileModule = new TasksTileModule();
  });

  it('should create an instance', () => {
    expect(tasksTileModule).toBeTruthy();
  });
});
