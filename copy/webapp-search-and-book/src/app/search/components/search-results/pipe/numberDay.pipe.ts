import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertDay'
})
export class NumbertDay implements PipeTransform {

  transform(value: string): string {
    return (new Date(value)).toString().split(' ')[2];
  }

}
