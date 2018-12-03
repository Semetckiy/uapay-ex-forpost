import { Component, ViewChild, HostListener, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { PTCService } from '../ptc.service';
import { PTCBase } from '../ptc-base';

export const KEY_CODE_ESCAPE = 27;
export const KEY_CODE_ENTER = 13;
export const KEY_CODE_TAB = 9;

@Component({
  selector: 'ama-ng-airpulse-ptc-desktop',
  templateUrl: './ptc-desktop.component.html',
  styleUrls: ['../ptc.component.scss']
})
export class PTCDesktopComponent {
  @ViewChild('popoverTemplate')
  popoverTemplate: NgbPopover;
  @Output()
  ptcOutput = new EventEmitter<any>();
  @Input()
  formPTC: FormGroup;
  @Input()
  ptcBase: PTCBase[];

  constructor(public service: PTCService, private readonly elementRef: ElementRef) {}

  // this if handles click outside of the popover to close it
  @HostListener('document:click', ['$event.target'])
  onclick(targetElement: any) {
    if (!this.elementRef.nativeElement.contains(targetElement) && this.popoverTemplate.isOpen()) {
      this.closePopoverAndSaveValues();
    }
  }

  // this listener handles escape and enter pressed in the popover but not in the inputs
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: any) {
    if ((event.keyCode === KEY_CODE_ESCAPE || event.keyCode === KEY_CODE_ENTER) && this.popoverTemplate.isOpen()) {
      this.closePopoverAndSaveValues();
      this.elementRef.nativeElement.querySelector('[id$=ptc]').focus();
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }

  dismissPopoverOnKeyPressed(event) {
    // this if handles escape and enter pressed on an input of the popover to close it
    if (event.keyCode === KEY_CODE_ESCAPE || event.keyCode === KEY_CODE_ENTER) {
      this.closePopoverAndSaveValues();
      // give focus manually since timeout does not work
      this.elementRef.nativeElement.querySelector('[id$=ptc-input]').focus();
      event.stopImmediatePropagation();
      event.preventDefault();
    }
    // this if handles the tab on select button to go back to the first input
    if (event.target.id.endsWith('ptcSelectButton') && event.keyCode === KEY_CODE_TAB && !event.shiftKey) {
      let firstInput: HTMLElement;
      // get the first input with data-index as attribute
      firstInput = this.elementRef.nativeElement.querySelector('input[data-index]') as HTMLElement;
      firstInput.focus();
      // avoid the tab event to go on the second input
      event.stopImmediatePropagation();
      event.preventDefault();
    }
    // we manually put an attribute data-index with the index of the ptc for loop
    // this if handles the shift + tab on the first input, to close popover
    if (event.target.getAttribute('data-index') === '0' && event.keyCode === KEY_CODE_TAB && event.shiftKey) {
      this.elementRef.nativeElement.querySelector('[id$=ptcSelectButton]').focus();
      // avoid the shift tab event to go on the last input
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }

  openPopoverOnEnterKeydown(event) {
    this.popoverTemplate.open();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  togglePopover() {
    if (this.popoverTemplate.isOpen()) {
      this.closePopoverAndSaveValues();
    } else {
      this.popoverTemplate.open();
    }
  }

  onSubmit() {
    this.closePopoverAndSaveValues();
  }

  private closePopoverAndSaveValues() {
    this.service.displayValue(this.ptcBase, this.formPTC);
    this.ptcOutput.emit(this.service.ptcs);
    this.popoverTemplate.close();
  }
}
