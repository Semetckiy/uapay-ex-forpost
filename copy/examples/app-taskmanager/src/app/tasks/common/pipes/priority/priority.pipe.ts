import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
  pure: true
})
export class PriorityPipe implements PipeTransform {

  private prio: {[value: number]: string} = {
    '10': 'High',
    '20': 'Medium',
    '30': 'Low'
  };

  constructor() {
  }

  transform(obj: any) : any {
    if(obj && obj.toString() && this.prio[obj.toString()]) {
      return this.prio[obj.toString()];
    }
    return null;
  }
}
