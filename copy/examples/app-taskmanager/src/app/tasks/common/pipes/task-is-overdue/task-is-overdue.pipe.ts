import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate, NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Pipe({
  name: 'taskIsOverdue',
  pure: true
})
export class TaskIsOverduePipe implements PipeTransform {

  private today: NgbDate = null;

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {
    const now =  new Date();
    this.today = NgbDate.from({
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    });
  }
  transform(value: NgbDateStruct): boolean {
    if(value
      && value.year
      && value.month
      && value.day
    ){
      return this.today.after(NgbDate.from(value));
    }

    return false;
  }

}
