export interface ResultsItem {
  id: string;
  price: number;
  currencyCode: string;
  fareTypeName?: string;
  fullyGdsSupported?: boolean;
  flights: Flight[];
  travelShopperTicket: number;
}

export interface Flight {
  // flags about direction
  arrival: boolean;
  departure: boolean;
  // array of recommended flights by bound segments in search
  solutions: Solution[];
}

export interface Solution {
  id: number;
  departureDate: string;
  departureTime: string;
  departureLocation: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalLocation: string;
  duration: number;
  segments: Segment[];
}

export interface Segment {
  cabin: string;
  connectionTime?: string;
  daysDifferenceDeparture?: string;
  daysDifferenceArrival?: string;
  bookingClass: { 'availability': number, 'classOfService': string };
  baggageAllowance: { 'unit': string, 'value': number } | null;
  flightNumber: string;
  carrier: {
    airline: { 'code': string, 'label': string },
    airlineDetails: any,
    operatingAirline?: { 'code': string, 'label': string },
    departureDate: string,
    departureTime: string,
    departureLocation: string,
    arrivalDate: string,
    arrivalTime: string,
    arrivalLocation: string
  };
}
