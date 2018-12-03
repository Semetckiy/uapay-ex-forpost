export interface Airline {
  code: string;
  label: string;
}

export interface Segment {
  carrierId: number;
}

export interface Solution {
  duration: number;
  segments: Segment[];
}

export interface Bound {
  solutions: Solution[];
}

export interface Cabin {
  code: string;
  label?: any;
}

export interface Arrival {
  date: string;
  location: number;
  terminal: string;
}

export interface Departure {
  date: string;
  location: number;
  terminal: string;
}

export interface Carrier {
  airline: number;
  arrival: Arrival;
  blacklisted: boolean;
  departure: Departure;
  equipment: number;
  flightNumber: string;
  operatingAirline?: number;
  technicalStops: any[];
}

export interface Currency {
  code: string;
  decimalPrecision: number;
  label: string;
}

export interface Equipment {
  code: string;
  label: string;
}

export interface Service {
  ffServiceId: number;
  status: string;
}

export interface FareFamily {
  airline: number;
  code: string;
  name: string;
  services: Service[];
}

export interface FareFamilyService {
  description: string;
  subtype: string;
  type: string;
}

export interface FareType {
  code: string;
  label: string;
}

export interface Offices {
}

export interface City {
  code: string;
  label: string;
}

export interface Country {
  code: string;
  label: string;
}

export interface Location {
  code: string;
  label: string;
}

export interface Site {
  city: City;
  country: Country;
  location: Location;
}

export interface TravellerType {
  code: string;
  label: string;
}

export interface Dictionary {
  airlines: Airline[];
  bounds: Bound[];
  cabins: Cabin[];
  carriers: Carrier[];
  currencies: Currency[];
  equipments: Equipment[];
  fareFamilies: FareFamily[];
  fareFamilyServices: FareFamilyService[];
  fareTypes: FareType[];
  feeTypes: any[];
  offices: Offices;
  sites: Site[];
  travellerTypes: TravellerType[];
}