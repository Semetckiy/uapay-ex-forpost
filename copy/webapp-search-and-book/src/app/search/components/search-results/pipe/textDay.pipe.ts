import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDay'
})
export class TextDay implements PipeTransform {

  transform(value: string): string {
    return (new Date(value)).toString().split(' ')[0];
  }

}
