import { FormControl, Validators } from '@angular/forms';

export class AuthenticationValidators extends Validators {

  static isObject(control: FormControl) {
    if ((isNaN(control.value)) && (typeof control.value !== 'object')) {
      return { notAnObject: true };
    } else {
      return null;
    }
  }

}
