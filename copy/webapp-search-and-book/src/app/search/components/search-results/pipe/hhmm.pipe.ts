import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhmm'
})
export class Hhmm implements PipeTransform {

  transform(value: number): string {
    let hh = ~~(value / 60);
    let mm = value - hh * 60;

    return hh + 'h' + ' ' + mm + 'm';
  }

}
