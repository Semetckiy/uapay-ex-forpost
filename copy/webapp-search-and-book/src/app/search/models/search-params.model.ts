

export enum SearchType {
  RoundTrip = 'roundTrip',
  OneWayTrip = 'oneWayTrip',
}

export interface SearchParams {
  searchType: SearchType;
  nonStop: boolean;
  outboundDate: string;
  inboundDate: string;
  passengers: string;
  airline: string;
  cabin: string;

  date: string;
  endDate:string;
  outboundFrom: any;//todo create type
  inboundTo: any;
  ptcs: any;
}


/*
* airportName: "Zhuliany International"
​​
cityName: "Kiev"
​​
countryCode: "UA"
​​
countryName: "Ukraine"
​​
iata: "IEV"
​​
stateCode: ""
​​
stateName: ""
​​
type: 7
*
* */


/*
* 0: {…}
​​​
category: "ADT"
​​​
code: "ADT"
​​​
infantAllowed: true
​​​
<prototype>: Object { … }
​​
1: {…}
​​​
category: "CHD"
​​​
code: "CHD"
​​​
<prototype>: Object { … }
​​
2: {…}
​​​
category: "INF"
​​​
code: "INF"
​​​
<prototype>: Object { … }
​​
length: 3
​​
<prototype>: [
* */
