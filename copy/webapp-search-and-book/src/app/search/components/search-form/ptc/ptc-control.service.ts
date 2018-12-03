import { Injectable } from '@angular/core';
import { PTCBase } from './ptc-base';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class PTCControlService {

  toFormGroup(ptcs: PTCBase[]) {
    const group: any = {};
    ptcs.forEach(ptc => {
      group[ptc.code] = new FormControl(ptc.value);
    });
    return new FormGroup(group);
  }
}
