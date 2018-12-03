import { Injectable } from '@angular/core';
import { PTCBase } from './ptc-base';
import { TranslatePipe } from '@seco/core';
import { BehaviorSubject } from 'rxjs';
import { PTCDictionary } from './ptc-dictionary';
import { PTC, Traveller } from './pnr.model';

@Injectable()
export class PTCService {
  PTCList: PTCBase[] = [
    { key: 'Adult', code: PTCDictionary.ADT.code, value: 1, category: PTCDictionary.ADT.category },
    { key: 'Child', code: PTCDictionary.CHD.code, value: 0, category: PTCDictionary.CHD.category },
    { key: 'Infant', code: PTCDictionary.INF.code, value: 0, category: PTCDictionary.INF.category }
  ];
  ptcs;
  ptcDisplayValue = '1 ' + this.translatePipe.transform('snb.search_panel.ptc.label.singular');

  // Observable string sources
  private readonly ptcDisplayValueSource = new BehaviorSubject<string>(this.ptcDisplayValue);
  ptcDisplayValue$ = this.ptcDisplayValueSource.asObservable();

  // Service message commands
  publishPTCValue(ptcDisplayValue: string) {
    this.ptcDisplayValueSource.next(ptcDisplayValue);
  }

  constructor(private readonly translatePipe: TranslatePipe) {}

  getPTCs() {
    const ptcs: PTCBase[] = [];

    for (const ptc of this.PTCList) {
      ptcs.push(
        new PTCBase({
          key: ptc.key,
          value: ptc.value,
          code: ptc.code,
          category: ptc.category
        })
      );
    }
    return ptcs;
  }

  displayValue(ptcBase, formPTC) {
    let count = 0;
    let ptcCount;
    this.ptcs = [];
    ptcBase.forEach((ptc, index) => {
      ptcCount = parseInt(formPTC.value[ptc.code], 10);
      for (let ind = 0; ind < ptcCount; ind++) {
        if (ptc.code === PTCDictionary.ADT.code) {
          this.ptcs.push({ code: ptc.code, infantAllowed: true, category: ptc.category });
        } else {
          this.ptcs.push({ code: ptc.code, category: ptc.category });
        }
      }
      count = count + ptcCount;
    });
    this.ptcDisplayValue = count + ' ' + this.translatePipe.transform('snb.search_panel.ptc.label.singular');
    if (count > 1) {
      this.ptcDisplayValue = count + ' ' + this.translatePipe.transform('snb.search_panel.ptc.label.plural');
    }
    this.publishPTCValue(this.ptcDisplayValue);

  }

  /**
   * Removes properties that are not needed for Airshopper from the PTC objects. It only keeps
   * the following properties: code, infantAllowed, category
   * @param ptcs PTC[]
   */
  removeUnusedPropertiesFromPtcs(ptcs: PTC[]) {
    const propertiesToRemove: string[] = ['ageNeeded', 'label', 'value'];
    for (const ptc of ptcs) {
      for (const property of propertiesToRemove) {
        delete ptc[property];
      }
    }
  }

  adaptPtcsDataForAirshopper(ptcs: PTC[]): PTC[] {
    this.removeUnusedPropertiesFromPtcs(ptcs);
    this.setPtcCategories(ptcs);
    this.replaceNullDateOfBirthByEmptyString(ptcs);
    return ptcs;
  }

  /**
   * This function, given a list of PTC, sets the category value for any ptc which don't have any, based
   * on the mapping code <-> category of the PTCDictionary
   * @param ptcs
   */
  setPtcCategories(ptcs: PTC[]) {
    for (const ptc of ptcs) {
      if (!ptc.category && PTCDictionary[ptc.code]) {
        ptc.category = PTCDictionary[ptc.code].category;
      }
    }
  }

  replaceNullDateOfBirthByEmptyString(ptcs: PTC[]) {
    for (const ptc of ptcs) {
      if (ptc.dateOfBirth === null) {
        ptc.dateOfBirth = '';
      }
    }
  }

  /**
   * This function reads the 'hasInfant' property at Traveller level and sets the same value at PTC level
   * @param travellers
   */
  setHasInfantForPtcs(travellers: Traveller[]) {
    for (const traveller of travellers) {
      traveller.ptc.hasInfant = traveller.hasInfant;
    }
  }
}
