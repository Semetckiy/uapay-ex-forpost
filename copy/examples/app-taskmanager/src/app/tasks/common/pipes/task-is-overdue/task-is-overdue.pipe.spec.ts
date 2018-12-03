import { TaskIsOverduePipe } from './task-is-overdue.pipe';
import { NgbDateParserFormatter, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { TestBed } from "@angular/core/testing";
import { TASK_MOCK } from "../../models/mocks/index";

describe('TaskIsOverduePipe', () => {
  let dateParserFormatter: NgbDateParserFormatter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbDatepickerModule
      ]
    });
    dateParserFormatter = TestBed.get(NgbDateParserFormatter);
  });

  it('create an instance', () => {
    const pipe = new TaskIsOverduePipe(dateParserFormatter);
    expect(pipe).toBeTruthy();
  });

  it('return true', () => {
    const now =  new Date();

    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };

    const past = {...today, year: today.year - 1};
    const future = {...today, year: today.year + 1};

    const pipe = new TaskIsOverduePipe(dateParserFormatter);
    expect(pipe.transform({...TASK_MOCK.dueDate, ...past})).toEqual(true);
  });

  it('return false', () => {
    const now =  new Date();

    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };

    const past = {...today, year: today.year - 1};
    const future = {...today, year: today.year + 1};

    const pipe = new TaskIsOverduePipe(dateParserFormatter);
    expect(pipe.transform({...TASK_MOCK.dueDate, ...future})).toEqual(false);
  });

  it('return false by default', () => {
    const now =  new Date();

    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };

    const past = {...today, year: today.year - 1};
    const future = {...today, year: today.year + 1};

    const pipe = new TaskIsOverduePipe(dateParserFormatter);
    expect(pipe.transform(undefined)).toEqual(false);
  });
});
