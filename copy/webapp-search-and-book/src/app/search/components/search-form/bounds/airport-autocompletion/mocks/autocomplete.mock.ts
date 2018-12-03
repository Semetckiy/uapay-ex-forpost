import { AirportSuggestion } from '../airport-suggestion.model';

export class AirportAutocompleteMock {
  public static mockAutocompletionCDG(): AirportSuggestion[] {
    return [{
      type: 4,
      airportName: 'Charles De Gaulle',
      cityName: 'Paris',
      iata: 'CDG',
      countryName: 'France',
      countryCode: 'FR',
      stateName: '',
      stateCode: ''
    }];
  }
  public static mockAutocompletionPAR() {
    return [{
      type: 1,
      airportName: null,
      cityName: 'Paris',
      iata: 'PAR',
      countryName: 'France',
      countryCode: 'FR',
      stateName: '',
      stateCode: ''
    },
    {
      type: 2,
      airportName: 'Charles De Gaulle',
      cityName: 'Paris',
      iata: 'CDG',
      countryName: 'France',
      countryCode: 'FR',
      stateName: '',
      stateCode: ''
    },
    {
      type: 2,
      airportName: 'Le Bourget',
      cityName: 'Paris',
      iata: 'LBG',
      countryName: 'France',
      countryCode: 'FR',
      stateName: '',
      stateCode: ''
    }];
  }
  public static mockAutocompletionSFO() {
    return [{
      type: 1,
      airportName: null,
      cityName: 'San Francisco',
      iata: 'SFO',
      countryName: 'United States Of America',
      countryCode: 'US',
      stateName: 'California',
      stateCode: 'CA'
    }];
  }
  public static mockAutocompletionBUE() {
    return [{
      type: 1,
      airportName: null,
      cityName: 'Buenos Aires',
      iata: 'BUE',
      countryName: 'Argentina',
      countryCode: 'AR',
      stateName: 'Buenos Aires',
      stateCode: 'BA'
    }];
  }
}


