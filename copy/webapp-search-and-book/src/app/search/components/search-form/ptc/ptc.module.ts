import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DfModalService, DfModalModule } from 'design-factory-v2';
import { PTCService } from './ptc.service';
import { PTCComponent } from './ptc.component';
import { PTCDesktopComponent } from './ptc-desktop/ptc-desktop.component';
import { PTCMobileComponent } from './ptc-mobile/ptc-mobile.component';
import { DynamicFormComponent } from './ptc-form.component';
import { PTCControlService } from './ptc-control.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe, IdGenerationModule } from '@seco/core';
import { PtcInputComponent } from './ptc-input/ptc-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DfModalModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    IdGenerationModule
  ],
  declarations: [PTCComponent, PTCDesktopComponent, PTCMobileComponent, DynamicFormComponent, PtcInputComponent],
  providers: [PTCControlService, PTCService, TranslatePipe, DfModalService],
  exports: [PTCComponent, PtcInputComponent]
})
export class PTCModule {}
