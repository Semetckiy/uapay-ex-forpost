// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
// import { NgbModalModule, DfModalService } from 'design-factory-v2';
// import { PTCService } from '../ptc.service';
// import { PTCControlService } from '../ptc-control.service';
// import { TranslatePipeMock } from '@seco/core/mock';
// import { PTCMobileComponent } from './ptc-mobile.component';
// import { TranslatePipe, TranslateService, HttpService } from '@seco/core';
// import { PTCDictionary } from '../ptc-dictionary';
//
// export default function () {
//   describe('PTCMobileComponent', () => {
//     let component: PTCMobileComponent;
//     let fixture: ComponentFixture<PTCMobileComponent>;
//     let translatePipe: any;
//
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         imports: [FormsModule,
//           ReactiveFormsModule,
//           NgbModalModule.forRoot()],
//         declarations: [PTCMobileComponent, TranslatePipeMock],
//         providers: [
//           PTCService,
//           PTCControlService,
//           {provide: TranslatePipe, useClass: TranslatePipeMock},
//           TranslateService,
//           HttpService,
//           DfModalService],
//         schemas: [NO_ERRORS_SCHEMA]
//       }).compileComponents();
//     }));
//
//     beforeEach(() => {
//       fixture = TestBed.createComponent(PTCMobileComponent);
//       component = fixture.componentInstance;
//       translatePipe = fixture.debugElement.injector.get<TranslatePipe>(TranslatePipe);
//       fixture.detectChanges();
//     });
//
//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });
//
//     it('should be call onSubmit function', () => {
//       component.formPTC = new FormGroup({ 'ADT': new FormControl(1) });
//       component.ptcBase = [{ 'key': 'Adult', 'code': PTCDictionary.ADT.code, 'value': 1, 'category': PTCDictionary.ADT.category }];
//       component.onSubmit();
//       expect(component.service.ptcDisplayValue).toBe('1 ' + translatePipe.transform('airpulse.search_panel.ptc.label.singular'));
//     });
//   });
// }
