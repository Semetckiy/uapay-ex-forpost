import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PTCBase } from './ptc-base';

@Component({
  selector: 'ama-ng-airpulse-ptc-form',
  templateUrl: './ptc-form.component.html',
  styleUrls: ['./ptc.component.scss']
})
export class DynamicFormComponent implements AfterViewInit {
  @Input()
  ptcBase: PTCBase[];
  @Input()
  formPTC: FormGroup;
  @ViewChild('ptcInputContainer')
  ptcInputContainer: ElementRef;

  ngAfterViewInit(): void {
    this.giveFocusToFirstPtcInput();
  }

  giveFocusToFirstPtcInput() {
    this.ptcInputContainer.nativeElement.querySelector('input').focus();
  }

  validateNumber(input, event, ptc) {
    if(ptc.code == 'ADT') {
      const pattern = /[0-9]/g;
      let inputChar = String.fromCharCode(event.keyCode);
      if(!pattern.test(inputChar)) {
        let parsedValue = this.ptcInputContainer.nativeElement.querySelector('input').value.replace(/[^0-9]/g, '');
        this.ptcInputContainer.nativeElement.querySelector('input').value = parsedValue;
      }
    }
  }

}
