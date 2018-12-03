export class SearchResult {
  recommendations: Recommendation[];
  searchData: ResultSearchData;
  travelShopperTicket: number; // it is on result level in model, this is incremental representation of amount of searches performed
  // Map with format 'propertyName (ex: airlines)' => list of all unique values for property in results
  allresultsValuesSummary: AllResultsValuesSummary;
}

export class ResultSearchData {
  bounds: SearchBound[];
  travellers: Traveller[];
  tripType: string;
}

export class CodeLabel {
  code: string;
  label: string;

  constructor(code: string, label: string) {
    this.code = code;
    this.label = label;
  }
}

export class Traveller {
  hasInfant: boolean;
  ptc: CodeLabel;
  id: number;
}

export class Site {
  city: CodeLabel;
  country: CodeLabel;
  location: CodeLabel;
}

export interface SearchBound {
  departure: Site;
  arrival: Site;
  date: Date;
}

export class Recommendation {
  id: number; // index of recommendation 0-249
  solutions: Solution[];
  priceBreakdown: PriceBreakdown;
  passengerPriceBreakdowns: PassengerPriceBreakdown[];
  fareType: FareType;
  currency: string;
  isNDC: boolean;
  searchData: ResultSearchData;
  recommendationId: string; // recommendation Id taken from search response

  constructor(
    id: number,
    priceBreakdown: PriceBreakdown,
    passengerPriceBreakdowns: PassengerPriceBreakdown[],
    fareType: FareType,
    currency: string,
    recommendationId: string,
    isNDC: boolean
  ) {
    this.id = id;
    this.priceBreakdown = priceBreakdown;
    this.passengerPriceBreakdowns = passengerPriceBreakdowns;
    this.fareType = fareType;
    this.currency = currency;
    this.solutions = [];
    this.recommendationId = recommendationId;
    this.isNDC = isNDC;
  }
}

export class PassengerPriceBreakdown {
  priceBreakdown: PriceBreakdown;
  fareBasisPerSolution: string[];
  pricedPTCPerSolution: CodeLabel[];
  travellerId: number;

  constructor(
    priceBreakdown: PriceBreakdown,
    fareBasisPerSolution: string[],
    pricedPTCPerSolution: CodeLabel[],
    travellerId: number
  ) {
    this.priceBreakdown = priceBreakdown;
    this.fareBasisPerSolution = fareBasisPerSolution;
    this.pricedPTCPerSolution = pricedPTCPerSolution;
    this.travellerId = travellerId;
  }
}

export class PriceBreakdown {
  priceWithoutTax: number;
  tax: number;
  serviceFees: number;
  markup: number;
  total: number;

  constructor(priceWithoutTax: number, tax: number, serviceFees: number, markup: number, total: number) {
    this.priceWithoutTax = priceWithoutTax;
    this.tax = tax;
    this.serviceFees = serviceFees;
    this.markup = markup;
    this.total = total;
  }
}

export class Solution {
  departureDate: Date;
  arrivalDate: Date;
  duration: number;
  departureLocation: string;
  arrivalLocation: string;
  segments: Segment[];
  fareFamily: any;
  elementRef: number;
  technicalStops: TechnicalStop[];

  constructor(
    departureDate: Date,
    arrivalDate: Date,
    duration: number,
    departureLocation: string,
    arrivalLocation: string,
    fareFamily: any,
    elementRef: number,
    technicalStops: TechnicalStop[]
  ) {
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.duration = duration;
    this.departureLocation = departureLocation;
    this.arrivalLocation = arrivalLocation;
    this.segments = [];
    this.fareFamily = fareFamily;
    this.elementRef = elementRef;
    this.technicalStops = technicalStops;
  }
}

export class Segment {
  cabin: string;
  carrier: Carrier;
  baggageAllowance: BaggageAllowance;
  fareFamily: FareFamily;
  bookingClass: BookingClass;
}

export class Carrier {
  airline: CodeLabel;
  operatingAirline: CodeLabel;
  departureDate: Date;
  departureLocation: string;
  arrivalDate: Date;
  arrivalLocation: string;

  constructor(
    airline: CodeLabel,
    operatingAirline: CodeLabel,
    departureDate: Date,
    departureLocation: string,
    arrivalDate: Date,
    arrivalLocation: string
  ) {
    this.airline = airline;
    this.operatingAirline = operatingAirline;
    this.departureDate = departureDate;
    this.departureLocation = departureLocation;
    this.arrivalDate = arrivalDate;
    this.arrivalLocation = arrivalLocation;
  }
}

export class BookingClass {
  availability: number;
  classOfService: string;

  constructor(classOfService: string, available: number) {
    this.availability = available;
    this.classOfService = classOfService;
  }
}

export class FareFamily {
  name: string;
  services: Service[];
}

export interface BaggageAllowance {
  unit: string;
  value: number;
}

export interface Service {
  status: ServiceStatus;
  ffService: {
    description: string;
    subtype: string;
    type: string;
  };
}

export enum ServiceStatus {
  INC = 'INC', // included
  CHA = 'CHA', // chargeable
  NOF = 'NOF' // no offered
}

export class PricingError {
  id: number;
  errors: ErrorModel[];

  constructor(recommendationId: number, errors: ErrorModel[]) {
    this.id = recommendationId;
    this.errors = errors;
  }
}

export class ErrorModel {
  listFieldError: string;
  number: number;
  subError: string;
  text: string;
  type: string;

  constructor(listFieldError: string, number: number, suberror: string, text: string, type: string) {
    this.listFieldError = listFieldError;
    this.number = number;
    this.subError = suberror;
    this.text = text;
    this.type = type;
  }
}

export class TechnicalStop {
  arrivalDate: string;
  departureDate: string;
  equipment: string;
  location: number;

  constructor(arrivalDate: string, departureDate: string, equipment: string, location: number) {
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.equipment = equipment;
    this.location = location;
  }
}

export interface AllResultsValuesSummary {
  airlines: CodeLabel[];
  marketingAirlines: CodeLabel[];
  cabinCodes: string[];
  fareTypes: FareType[];
  bounds: any;
  sites: any;
  bookingClasses: string[];
}

export interface FareType {
  code: string;
  label: string;
}
