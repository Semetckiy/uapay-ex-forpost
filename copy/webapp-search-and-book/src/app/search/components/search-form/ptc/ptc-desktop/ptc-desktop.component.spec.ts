// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { PTCDesktopComponent, KEY_CODE_ESCAPE, KEY_CODE_TAB, KEY_CODE_ENTER } from './ptc-desktop.component';
// import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
// import { NgbModule } from 'design-factory-v2';
// import { PTCService } from '../ptc.service';
// import { TranslatePipe, TranslateService, HttpService, IdGenerationModule } from '@seco/core';
// import { PTCDictionary } from '../ptc-dictionary';
// import { By } from '@angular/platform-browser';
// import { DynamicFormComponent } from '../ptc-form.component';
// import { TranslatePipeMock } from '@seco/core/mock';
//
//
// const PTC_INPUT_ID = '#ptc-input';
// const mockPts = [
//   {
//     value: 1,
//     key: 'Adult',
//     code: PTCDictionary.ADT.code,
//     category: PTCDictionary.ADT.category
//   },
//   {
//     value: 0,
//     key: 'Child',
//     code: PTCDictionary.CHD.code,
//     category: PTCDictionary.CHD.category
//   },
//   {
//     value: 0,
//     key: 'Infant',
//     code: PTCDictionary.INF.code,
//     category: PTCDictionary.INF.category
//   }
// ];
//
// export default function() {
//   describe('PTCComponentDesktop', () => {
//
//     let component: PTCDesktopComponent;
//     let fixture: ComponentFixture<PTCDesktopComponent>;
//     let ptcDebug: DebugElement;
//     let ptcEl: HTMLElement;
//     let translatePipe: TranslatePipe;
//
//     const escapeKeydownEvent: any = document.createEvent('CustomEvent');
//     escapeKeydownEvent.keyCode = KEY_CODE_ESCAPE;
//     escapeKeydownEvent.initEvent('keydown', true, true);
//     const tabKeydownEvent: any = document.createEvent('CustomEvent');
//     tabKeydownEvent.keyCode = KEY_CODE_TAB;
//     tabKeydownEvent.initEvent('keydown', true, true);
//     const enterKeydownEvent: any = document.createEvent('CustomEvent');
//     enterKeydownEvent.keyCode = KEY_CODE_ENTER;
//     enterKeydownEvent.initEvent('keydown', true, true);
//     const shiftTabKeydownEvent: any = document.createEvent('CustomEvent');
//     shiftTabKeydownEvent.keyCode = KEY_CODE_TAB;
//     shiftTabKeydownEvent.shiftKey = true;
//     shiftTabKeydownEvent.initEvent('keydown', true, true);
//
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         imports: [FormsModule, ReactiveFormsModule, NgbModule.forRoot(), IdGenerationModule],
//         declarations: [PTCDesktopComponent, DynamicFormComponent, TranslatePipeMock],
//         providers: [PTCService, { provide: TranslatePipe, useClass: TranslatePipeMock }, TranslateService, HttpService],
//         schemas: [NO_ERRORS_SCHEMA]
//       }).compileComponents();
//     }));
//
//     beforeEach(() => {
//       fixture = TestBed.createComponent(PTCDesktopComponent);
//       component = fixture.componentInstance;
//       ptcDebug = fixture.debugElement;
//       ptcEl = ptcDebug.nativeElement;
//       translatePipe = ptcDebug.injector.get<TranslatePipe>(TranslatePipe);
//
//       component.formPTC = new FormGroup({
//         ADT: new FormControl(1),
//         CHD: new FormControl(0),
//         INF: new FormControl(0)
//       });
//       component.ptcBase = mockPts;
//       fixture.detectChanges();
//     });
//
//     it('should be created', () => {
//       expect(component).toBeTruthy();
//     });
//
//     it('should have popover hidden by default', () => {
//       expect(component.popoverTemplate.isOpen()).toBe(false, 'closed by default');
//     });
//
//     it('should open popover by clicking in PTC input', () => {
//
//       const ptcInput: HTMLInputElement = ptcEl.querySelector(PTC_INPUT_ID);
//       ptcInput.click();
//       fixture.detectChanges();
//
//       expect(component.popoverTemplate.isOpen()).toBe(true, 'opened by left click');
//
//       const firstFormInput: HTMLInputElement = ptcEl.querySelector('ama-ng-airpulse-ptc-form input:first-of-type');
//       expect(firstFormInput).toBeTruthy();
//     });
//
//     it('should open popover by pressing enter in PTC input', () => {
//       const ptcInput: DebugElement = fixture.debugElement.query(By.css(PTC_INPUT_ID));
//
//       ptcInput.triggerEventHandler('keydown.enter', {});
//       fixture.detectChanges();
//       expect(component.popoverTemplate.isOpen()).toBe(true, 'opened by enter keydown');
//     });
//
//     it('should close popover when pressing enter on select button', () => {
//       const ptcInput: HTMLInputElement = ptcEl.querySelector(PTC_INPUT_ID);
//       let selectButton: DebugElement;
//       ptcInput.click();
//       fixture.detectChanges();
//       selectButton = ptcDebug.query(By.css('#ptcSelectButton'));
//       selectButton.nativeElement.dispatchEvent(enterKeydownEvent);
//
//       expect(component.popoverTemplate.isOpen()).toBe(false, 'close popover by enter keydown');
//     });
//
//     it('should go to first popover input when pressing tab on select button of popover', () => {
//       const ptcInput: HTMLInputElement = ptcEl.querySelector(PTC_INPUT_ID);
//       let selectButton: DebugElement;
//
//       ptcInput.click();
//       fixture.detectChanges();
//
//       selectButton = ptcDebug.query(By.css('#ptcSelectButton'));
//       selectButton.nativeElement.dispatchEvent(tabKeydownEvent);
//
//       expect(document.activeElement.getAttribute('data-index')).toBe(
//         '0',
//         'focus in first input by pressing tab on select button'
//       );
//     });
//
//     it('should go to select button popover when pressing shift tab on first input of popover', () => {
//       const ptcInput: HTMLInputElement = ptcEl.querySelector(PTC_INPUT_ID);
//       let firstPopoverInput: DebugElement;
//
//       ptcInput.click();
//       fixture.detectChanges();
//
//       firstPopoverInput = ptcDebug.query(By.css('ama-ng-airpulse-ptc-form input[data-index="0"]'));
//       firstPopoverInput.nativeElement.dispatchEvent(shiftTabKeydownEvent);
//       expect(document.activeElement.id).toBe(
//         'ptcSelectButton',
//         'focus in select button by pressing shift tab on first input'
//       );
//     });
//
//     it('should should update the number of passengers value on PTC form update', () => {
//       const ptcInput: HTMLInputElement = ptcEl.querySelector(PTC_INPUT_ID);
//       let adultNumberInput: HTMLInputElement;
//       let childNumberInput: HTMLInputElement;
//       let infantNumberInput: HTMLInputElement;
//
//       expect(ptcInput.value).toContain(
//         '1 ' + translatePipe.transform('airpulse.search_panel.ptc.label.singular'),
//         'default display value is 1 passenger'
//       );
//
//       // opening the popover
//       ptcInput.click();
//       fixture.detectChanges();
//
//       adultNumberInput = ptcEl.querySelector('ama-ng-airpulse-ptc-form input[data-index="0"]');
//       childNumberInput = ptcEl.querySelector('ama-ng-airpulse-ptc-form input[data-index="1"]');
//       infantNumberInput = ptcEl.querySelector('ama-ng-airpulse-ptc-form input[data-index="2"]');
//
//       // modifying the PTC popover input values and notifying the browser
//       adultNumberInput.value = '2';
//       childNumberInput.value = '1';
//       infantNumberInput.value = '1';
//       adultNumberInput.dispatchEvent(new Event('input'));
//       childNumberInput.dispatchEvent(new Event('input'));
//       infantNumberInput.dispatchEvent(new Event('input'));
//
//       // closing the popover
//       ptcInput.click();
//       fixture.detectChanges();
//
//       expect(ptcInput.value).toContain(
//         '4 ' + translatePipe.transform('airpulse.search_panel.ptc.label.plural'),
//         'displays 4 passengers when 2 adults, 1 child and 1 infant are selected'
//       );
//     });
//
//     it('should handle enter pressed on document, call on onKeyDown function', () => {
//       let event: any;
//       event = document.createEvent('CustomEvent');
//       const inputEl: HTMLElement = fixture.nativeElement.querySelector(PTC_INPUT_ID);
//
//       event.keyCode = KEY_CODE_ENTER;
//       event.initEvent('keydown', true, true);
//       inputEl.click();
//       document.dispatchEvent(event);
//       expect(component.popoverTemplate.isOpen()).toBe(false, 'closed by enter keydown');
//     });
//
//     it('should handle escape pressed on document, call on onKeyDown function', () => {
//       let event: any;
//       event = document.createEvent('CustomEvent');
//       const inputEl: HTMLElement = fixture.nativeElement.querySelector(PTC_INPUT_ID);
//
//       event.keyCode = KEY_CODE_ESCAPE;
//       event.initEvent('keydown', true, true);
//       inputEl.click();
//       document.dispatchEvent(event);
//       expect(component.popoverTemplate.isOpen()).toBe(false, 'closed by escape keydown');
//     });
//   });
// }
