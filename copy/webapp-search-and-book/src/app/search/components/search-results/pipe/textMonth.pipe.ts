import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textMonth'
})
export class TextMonth implements PipeTransform {

  transform(value: string): string {
    return (new Date(value)).toString().split(' ')[1];
  }

}
