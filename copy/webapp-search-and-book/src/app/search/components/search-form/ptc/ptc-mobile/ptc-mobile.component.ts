import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DfModalService } from 'design-factory-v2';
import { FormGroup } from '@angular/forms';
import { PTCService } from '../ptc.service';
import { PTCBase } from '../ptc-base';

@Component({
  selector: 'ama-ng-airpulse-ptc-mobile',
  templateUrl: './ptc-mobile.component.html',
  styleUrls: ['../ptc.component.scss']
})
export class PTCMobileComponent {
  @Output()
  ptcOutput = new EventEmitter<any>();
  @Input()
  formPTC: FormGroup;
  @Input()
  ptcBase: PTCBase[];

  constructor(private readonly modalService: DfModalService, public service: PTCService) {}

  /**
   * Used to Open the Model
   * @param content
   */
  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    this.service.displayValue(this.ptcBase, this.formPTC);
    this.ptcOutput.emit(this.service.ptcs);
  }
}
