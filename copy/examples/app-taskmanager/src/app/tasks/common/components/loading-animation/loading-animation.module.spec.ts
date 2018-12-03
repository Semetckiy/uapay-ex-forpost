import { LoadingAnimationModule } from './loading-animation.module';

describe('LoadingAnimationModule', () => {
  let loadingAnimationModule: LoadingAnimationModule;

  beforeEach(() => {
    loadingAnimationModule = new LoadingAnimationModule();
  });

  it('should create an instance', () => {
    expect(loadingAnimationModule).toBeTruthy();
  });
});
