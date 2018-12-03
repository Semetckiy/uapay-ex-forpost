import { DateFormatPipe } from './date-format.pipe';
import { TestBed } from "@angular/core/testing";
import { NgbDateParserFormatter, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

describe('DateFormatPipe', () => {
  let dateParserFormatter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbDatepickerModule.forRoot()
      ]
    });

    dateParserFormatter = TestBed.get(NgbDateParserFormatter);
  });

  it('create an instance', () => {
    const pipe = new DateFormatPipe(dateParserFormatter);
    expect(pipe).toBeTruthy();
  });

  it('should return string for NgbDateStruct', () => {
    const pipe = new DateFormatPipe(dateParserFormatter);

    expect(pipe.transform({day: 1, month: 12, year: 2018})).toEqual("2018-12-01");
  });

  it('should return null when input is invalid', () => {
    const pipe = new DateFormatPipe(dateParserFormatter);

    expect(pipe.transform({})).toBeNull();
    expect(pipe.transform({day: 1})).toBeNull();
    expect(pipe.transform({month: 1})).toBeNull();
    expect(pipe.transform({year: 1})).toBeNull();
    expect(pipe.transform("string1")).toBeNull();
    expect(pipe.transform({day: 111, month: 111, year: 111})).toBeNull();
  });
});
