import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {PTC} from "../pnr.model";

export const PTC_INPUT_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PtcInputComponent),
  multi: true,
};


@Component({
  selector: 'app-ptc-input',
  providers: [PTC_INPUT_ACCESSOR],
  templateUrl: './ptc-input.component.html',
  styleUrls: ['./ptc-input.component.css']
})
export class PtcInputComponent implements OnInit, ControlValueAccessor {

  ptcInput: PTC[];
  onChange;

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.ptcInput = obj;
  }

  updatePtcInput(newPtcValues: PTC[]) {
    //this.ptcInput = newPtcValues;
    this.onChange(newPtcValues);
  }
}
