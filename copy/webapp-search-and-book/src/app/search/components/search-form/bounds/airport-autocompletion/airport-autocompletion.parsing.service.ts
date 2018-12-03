import { Injectable } from '@angular/core';
import { AirportSuggestion } from './airport-suggestion.model';
import { StringHelper } from '../../../../secoHelpers/string.helper';

const MINIMUM_LETTERS_FOR_AUTOCOMPLETION = 3;

@Injectable()
export class AirportAutocompletionParsingService {
  /**
   * Get suggestions which match with the query string.
   * @param {String} str The matching string (ex: Pari)
   * @param {String} res The complete XHR string to parse (ex: [ZAAfrique du Sud/AAM-,Mala
   * Mala/ADY-,Alldays/AFD-,Port Alfred...)
   * @return {Array} An array of Suggestion objects.
   */
  parseFileAndFilterAndSort(str: string, res: string): AirportSuggestion[] {
    // no suggestions provided is not enough letters
    if (!res || str.length < MINIMUM_LETTERS_FOR_AUTOCOMPLETION) {
      return [];
    }

    // str = decodeURIComponent(str);
    const tRes: Array<AirportSuggestion> = [];

    // Search by Code
    if (str.length < 4) {
      const iSrh = '#' + str.toUpperCase();
      this.searchSuggestion(res, iSrh, tRes);
    }

    // these are perfect matches
    // if (str.length === 3) {
    //     for (let index = 0, l = tRes.length; index < l; index++) {
    //         tRes[index].exactMatch = true;
    //     }
    // }

    // Search by Name

    // Make the string to search. it needs to look like this:
    // "This Is The Search String"
    let nSrh = ',';
    let lastIsExtraChar = true;
    for (let i = 0; i < str.length; i++) {
      if (lastIsExtraChar) {
        lastIsExtraChar = false;
        nSrh += str.charAt(i).toUpperCase();
      } else {
        nSrh += str.charAt(i).toLowerCase();
      }
      if (str.charAt(i) === ' ') {
        lastIsExtraChar = true;
      }
    }

    this.searchSuggestion(res, nSrh, tRes);
    return tRes;
  }

  /**
   * Search for a given entry in the resource string.
   * PTR 06486558 : This method have been overriden to be able to display a city and the corresponding airport,
   * in the case where there is only one airport.
   * @protected
   * @param {String} res Text resource to parse
   * @param {String} srh String to search
   * @param {Array} tRes array of resources
   */
  searchSuggestion(res: string, srh: string, tRes: Array<any>) {
    let city, citySc, cityScn, cityCc, cityCcn, aan, noa;

    // Original results are stored with accents
    const bkpRes = res;
    // Accents are stripped for search
    res = StringHelper.stripAccents(res);
    // res = util.strip.accents(res);
    let pN = bkpRes.indexOf(srh); // position Name
    while (pN !== -1) {
      // Get country code (cc)
      const pSCC = res.lastIndexOf('[', pN) + 1; // position Start Country Code
      let cc = res.substr(pSCC, 2);

      // Get country name (ccn)
      let ccn = this.getCountryName(bkpRes, pSCC + 2);

      // Get state code and state name
      const pSSC = res.lastIndexOf(']', pN) + 1; // position Start State Code
      let sc = '';
      let scn = '';
      if (pSSC !== -1 && pSSC > pSCC) {
        sc = res.substr(pSSC, 2);
        // Get state name (scn)
        const pESCN = res.indexOf('#', pSSC); // position End State Code Name
        scn = res.substring(pSSC + 2, pESCN);
      }

      // Get iata code (ic)
      let pSIC = res.lastIndexOf('#', pN) + 1; // position Start Iata Code
      const ic = res.substr(pSIC, 3);

      // Get city name (cn)
      const pSCN = res.indexOf(',', pSIC) + 1; // position start of city name
      city = this.getCityName(bkpRes, pSCN);
      const cn = city.name;
      if (city.stateCode !== '') {
        sc = city.stateCode;
      }
      if (city.stateName !== '') {
        scn = city.stateName;
      }
      if (city.countryCode !== '') {
        cc = city.countryCode;
      }
      if (city.countryName !== '') {
        ccn = city.countryName;
      }
      // Get Type
      pSIC += 3; // Move on type position
      const type = res.charAt(pSIC);

      if (type === '{') {
        // city containing IATA airports (ex: PAR contains CDG, ORY)

        this.addSuggestion(tRes, 1, ic, cn, null, sc, scn, cc, ccn);

        // Get number of airports (noa)
        noa = this.getNbOfIATAAirportsInMultiCity(res, pSIC);

        for (let i = 0; i < noa; i++) {
          // Get additionnal airport code (aac)
          let pCAC = res.indexOf('#', pSIC) + 1; // position Current Airport
          // Code
          const aac = res.substr(pCAC, 3);

          // Get additionnal airport name (aan)
          pCAC += 5; // Move on the additionnal airport name
          city = this.getCityName(res, pCAC);
          aan = city.name;
          citySc = city.stateCode !== '' ? city.stateCode : sc;
          cityScn = city.stateName !== '' ? city.stateName : scn;
          cityCc = city.countryCode !== '' ? city.countryCode : cc;
          cityCcn = city.countryName !== '' ? city.countryName : ccn;

          this.addSuggestion(tRes, 2, aac, cn, aan, citySc, cityScn, cityCc, cityCcn);
          pSIC = res.indexOf('#', pCAC); // Move to search next
        }
        // } else if (type === '(') {

        // city only
        // addSuggestion(tRes, 3, ic, cn, null, null, null, cc, ccn);
      } else if (type === ')') {
        // airport only

        // Get the real city name (rcn) (so Paris for Charles de Gaulle or Orly)
        let pS1 = res.lastIndexOf('{', pSIC); // Get the last position of city tagged as city
        // containing airports
        let pS2 = res.lastIndexOf('+', pSIC); // Get the last position of city tagged as city&airport
        const pS3 = res.lastIndexOf('-,', pSIC);
        const pS4 = res.lastIndexOf('-1,', pSIC);
        if (pS4 > pS2) {
          pS2 = pS4;
        }
        if (pS3 > pS2) {
          pS2 = pS3;
        }
        if (pS2 > pS1) {
          pS1 = pS2; // Get the max first last so the maximum
        }

        // Get the name
        const pSRCN = res.indexOf(',', pS1) + 1; // position Start Real City Name
        city = this.getCityName(bkpRes, pSRCN);
        const rcn = city.name;
        citySc = city.stateCode !== '' ? city.stateCode : sc;
        cityScn = city.stateName !== '' ? city.stateName : scn;
        cityCc = city.countryCode !== '' ? city.countryCode : cc;
        cityCcn = city.countryName !== '' ? city.countryName : ccn;

        /**
         *   check if airport has been already added to the suggestion list within city airport - due to
         *	 PTR 04429078
         */
        let addCity = true;
        for (const resource of tRes) {
          if (resource.iata === ic) {
            addCity = false;
            break;
          }
        }
        if (addCity) {
          this.addSuggestion(tRes, 4, ic, rcn, cn, citySc, cityScn, cityCc, cityCcn);
        }
      } else if (type === '+' || type === '-') {
        // city and airport (ex: NCE)

        // Get the airport name (an)
        let an = cn;
        citySc = sc;
        cityScn = scn;

        if (type === '+') {
          const pSAN = res.indexOf(',', pSIC + 5) + 1; // position Start Airport Name
          city = this.getCityName(bkpRes, pSAN);
          an = city.name;
          citySc = city.stateCode !== '' ? city.stateCode : sc;
          cityScn = city.stateName !== '' ? city.stateName : scn;
        }

        // Get number of airports (noa)
        noa = this.getNbOfIATAAirportsInMultiCity(res, pSIC);
        const isMultiAirports = !(noa === 0);

        // Flights in MP/MPE can be associated to the city or airport, so add them both
        // PTR 06486558 [Medium]: ALL FARES PLUS - Error:No availability matching your criteria
        if (isMultiAirports) {
          this.addSuggestion(tRes, 7, ic, cn, an, citySc, cityScn, cc, ccn);
          this.addSuggestion(tRes, 2, ic, cn, an, citySc, cityScn, cc, ccn);
        } else {
          this.addSuggestion(tRes, 5, ic, cn, an, citySc, cityScn, cc, ccn);
        }

        // Search all sub airports
        if (isMultiAirports) {
          for (let i = 0; i < noa; i++) {
            // Get additional airport code (aac)
            let pCAC = res.indexOf('#', pSIC) + 1; // position Current Airport Code
            const aac = res.substr(pCAC, 3);

            // Get additional airport name (aan)
            pCAC += 5; // Move on the additional airport name
            city = this.getCityName(bkpRes, pCAC);
            aan = city.name;
            citySc = city.stateCode !== '' ? city.stateCode : sc;
            cityScn = city.stateName !== '' ? city.stateName : scn;

            this.addSuggestion(tRes, 2, aac, cn, aan, citySc, cityScn, cc, ccn);
            pSIC = res.indexOf('#', pCAC); // Move to search next
          }
        }
      }

      // Next name
      pN++;
      pN = res.indexOf(srh, pN);
    }

    // console.log(tRes);
  }

  /**
   * Retrieve the name of the country with the position of an element in the resource string
   * @param {String} s the resource string
   * @param {Number} p the position
   * @return {String}
   */
  getCountryName(s: string, p: number): string {
    let p1 = s.indexOf('#', p);
    let p2 = s.indexOf(']', p);

    if (p1 === -1) {
      p1 = s.length;
    }
    if (p2 === -1) {
      p2 = s.length;
    }

    if (p2 < p1) {
      p1 = p2;
    }
    return s.substring(p, p1);
  }

  /**
   * Retrieve information on a element from its position in the resource string
   * @param {String} s the resource string
   * @param {Number} p the position
   * @return {Object}
   */
  getCityName(s: string, p: number): object {
    let name = '',
      stateCode = '',
      stateName = '',
      countryCode = '',
      countryName = '';

    let p1 = s.indexOf(',', p);
    let p2 = s.indexOf('#', p);
    let p3 = s.indexOf('[', p);
    let p4 = s.indexOf(']', p);
    let p5 = s.indexOf('%', p);
    let p6 = s.indexOf('~', p);

    if (p1 === -1) {
      p1 = s.length;
    }
    if (p2 === -1) {
      p2 = s.length;
    }
    if (p3 === -1) {
      p3 = s.length;
    }
    if (p4 === -1) {
      p4 = s.length;
    }
    if (p5 === -1) {
      p5 = s.length;
    }
    if (p6 === -1) {
      p6 = s.length;
    }

    if (p2 < p1) {
      p1 = p2;
    }
    if (p3 < p1) {
      p1 = p3;
    }
    if (p4 < p1) {
      p1 = p4;
    }

    if (p5 < p1) {
      name = s.substring(p, p5);
      // An airport is associated to a city and to a state
      // In some cases, the city is not in the state, that's why we need
      // to have the real state associated to the airport
      stateCode = s.substring(p5 + 1, p5 + 3);
      stateName = s.substring(p5 + 3, p1);
    } else if (p6 < p1) {
      name = s.substring(p, p6);
      // An airport is associated to a city and to a country
      // In some cases, the city is not in the country, that's why we need
      // to have the real state associated to the airport
      countryCode = s.substring(p6 + 1, p6 + 3);
      countryName = s.substring(p6 + 3, p1);
    } else {
      name = s.substring(p, p1);
    }

    return {
      name,
      stateCode,
      stateName,
      countryCode,
      countryName
    };
  }

  /**
   * Store a valid suggestion
   * @param {Array} tRes the existing suggestions list
   * @param {Number} type
   * @param {String} iata
   * @param {String} cityName
   * @param {String} airportName
   * @param {String} stateCode
   * @param {String} stateName
   * @param {String} countryCode
   * @param {String} countryName
   */
  addSuggestion(
    tRes: Array<any>,
    type: number,
    iata: string,
    cityName: string,
    airportName: string,
    stateCode: string,
    stateName: string,
    countryCode: string,
    countryName: string
  ) {
    for (let index = 0, l = tRes.length, existing; index < l; index++) {
      existing = tRes[index];
      if (existing.iata === iata && existing.type === type) {
        return;
      }
    }
    tRes.push({
      type,
      iata,
      cityName,
      airportName,
      stateCode,
      stateName,
      countryCode,
      countryName
    });
  }

  /**
   * In case of cities containing multiple IATA airports, this method can be used to extract the number of
   * IATA airports found in the file.
   * @param {String} str The string being searched
   * @param {Number} startIndex The index from which the string is being searched for multiple airports
   * @return {Number} The number of airports in this city, 0 in case this was not found to be a multiple
   * airport city
   */
  getNbOfIATAAirportsInMultiCity(str: string, startIndex: number): number {
    const nb = str.substring(startIndex + 1, str.indexOf(',', startIndex));
    if (nb === '') {
      return 0;
    } else {
      return parseInt(nb, 10);
    }
  }
}
