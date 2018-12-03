import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique',
  pure: false
})

export class FilterUnique implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort().filter(function(item, pos, ary) {
      return !pos || item.departureTime != ary[pos - 1].departureTime;
    })
  }

}
