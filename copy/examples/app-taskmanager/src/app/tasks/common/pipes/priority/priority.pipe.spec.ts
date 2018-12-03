import { PriorityPipe } from './priority.pipe';
import { TestBed } from "@angular/core/testing";

describe('PriorityPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ]
    });

  });

  it('create an instance', () => {
    const pipe = new PriorityPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string for priority (integer)', () => {
    const pipe = new PriorityPipe();

    expect(pipe.transform( 10)).toEqual('High');
  });

  it('should return null when input is invalid', () => {
    const pipe = new PriorityPipe();

    expect(pipe.transform(0)).toBeNull();
  });

  it('should handle empty objects', () => {
    const pipe = new PriorityPipe();

    expect(pipe.transform({})).toBeNull();
  });
});
