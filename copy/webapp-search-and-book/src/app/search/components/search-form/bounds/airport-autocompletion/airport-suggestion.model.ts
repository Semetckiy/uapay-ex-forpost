export interface AirportSuggestion {

  // The type attribute can be one of the following :
  // 1: City containing multiple airports (ex: PAR contains CDG, ORY)
  // 2: Airports in city with multiple airports (ex: CDG)
  // 3: Never seen
  // 4: only airport in a city with different name (ex: LOU)
  // 5: City and airport with same name (ex: NCE)
  // 6: Railway station (ex: QJZ)
  // 7: Airport with sub airports, example: Los Angeles (LAX)
  type: SuggestionType;
  airportName: string;
  cityName: string;
  iata: string;
  countryName: string;
  countryCode: string;
  stateName: string;
  stateCode: string;
}

export enum SuggestionType {
  CityWithMultipleAirports = 1,
  AirportsInCityWithMultipleAirports = 2,
  UnknownType = 3,
  AirportInCityWithDifferentName = 4,
  CityAndAirportWithSameName = 5,
  RailwayStation = 6,
  AirportWithSubAirport = 7
}
