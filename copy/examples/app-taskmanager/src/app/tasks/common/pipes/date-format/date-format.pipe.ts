import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {

  }

  transform(obj: any) : any{
    if(obj && obj.day <= 31 && obj.month <= 12 && obj.year) {
      return this.ngbDateParserFormatter.format(obj);
    }
    return null;
  }
}
