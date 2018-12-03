import { Flight, ResultsItem, Segment, Solution } from '../models/results-item.model';
import { SearchParams } from '../models/search-params.model';

export function transform(data): ResultsItem[] {

  return data.standard.proposals.reduce((searchResults: ResultsItem[], proposal): ResultsItem[] => {
    searchResults.push({
      id: proposal.id,
      price: proposal.priceBreakdown.price.toFixed(2),
      currencyCode: getDictionaryValue(data, 'currencies', proposal.priceBreakdown.currency, 'code'),
      fareTypeName: getDictionaryValue(data, 'fareTypes', proposal.fareType),
      fullyGdsSupported: proposal.fullyGdsSupported,
      travelShopperTicket: data.travelShopperTicket,
      flights: data.searchData.bounds.map((bound, boundIndex): Flight => {
        return {
          arrival: bound.arrival == 1,
          departure: bound.departure == 1,
          solutions: proposal.bounds[boundIndex].solutions.map((solution: any): Solution => {
            // solution.id
            const dictionarySolution = data.dictionary.bounds[boundIndex].solutions[solution.id];
            const segments = dictionarySolution.segments.map(segment => data.dictionary.carriers[segment.carrierId]);
            const firstSegment = segments[0];
            const lastSegment = segments[segments.length - 1];
            return {
              id: solution.elementRef,
              departureDate: formatDate(firstSegment.departure.date),
              departureTime: formatTime(firstSegment.departure.date),
              departureLocation: data.dictionary.sites[firstSegment.departure.location].city.code,
              arrivalDate: formatDate(lastSegment.arrival.date),
              arrivalTime: formatTime(lastSegment.arrival.date),
              arrivalLocation: data.dictionary.sites[lastSegment.arrival.location].city.code,
              duration: dictionarySolution.duration,
              segments: segments.map((segment, segmentIndex): Segment => {

                const cabin = solution.segments[segmentIndex].cabin;

                const recommendation = proposal.recommendations.reduce((recommendation, rec, recIndex): any => {
                  return rec.solutions[boundIndex] == solution.id ? rec : recommendation;
                }, {});

                let fareFamilies = data.dictionary.fareFamilies.find(a => a.airline === segment.airline);
                let fareFamilyServices = data.dictionary.fareFamilyServices;
                let airlineDetails = null;

                // Not all fareFamilies are present
                if (fareFamilies) {
                  airlineDetails = {
                    class: {
                      code: fareFamilies.code,
                      name: fareFamilies.name
                    },
                    fareFamilyServices: fareFamilies.services.map((service, serviceIndex): any => {
                      return fareFamilyServices[service.ffServiceId];
                    })
                  };
                }

                let baggageAllowance = null;

                if (recommendation.baggageAllowance && recommendation.baggageAllowance[boundIndex]) {
                  baggageAllowance = recommendation.baggageAllowance[boundIndex][segmentIndex];
                }

                return {
                  cabin: data.dictionary.cabins[cabin.id].code,
                  connectionTime: segmentIndex > 0 ? subDates(segment.departure.date, segments[segmentIndex - 1].arrival.date) : null,
                  daysDifferenceDeparture: segmentIndex > 0 ? daysDiff(segments[segmentIndex - 1].departure.date, segment.departure.date) : null,
                  daysDifferenceArrival: segmentIndex > 0 ? daysDiff(segments[segmentIndex - 1].arrival.date, segment.arrival.date) : null,
                  bookingClass: {
                    availability: cabin.bookingClass.availabilityStays,
                    classOfService: cabin.bookingClass.classOfService
                  },
                  baggageAllowance,
                  flightNumber: segment.flightNumber,
                  carrier: {
                    airline: data.dictionary.airlines[segment.airline],
                    airlineDetails: airlineDetails,
                    operatingAirline: data.dictionary.airlines[segment.operatingAirline],
                    departureDate: formatDate(segment.departure.date),
                    departureTime: formatTime(segment.departure.date),
                    departureLocation: data.dictionary.sites[segment.departure.location].city.code,
                    arrivalDate: formatDate(segment.arrival.date),
                    arrivalTime: formatTime(segment.arrival.date),
                    arrivalLocation: data.dictionary.sites[segment.arrival.location].city.code,
                  }
                };
              }),
            };
          }),
        };
      }),
    });
    return searchResults;
  }, []);
}

function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}


function formatTime(date) {
  return new Date(date).toISOString().split('T')[1].slice(0, 5);
}

export function subDates(date1, date2): string {
  let diff = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());

  let diffDays = Math.floor(diff / (1000 * 3600 * 24));
  let diffHours = Math.floor((diff - diffDays * 1000 * 3600 * 24) / (1000 * 3600));
  let diffMinutes = Math.ceil((diff - diffDays * 1000 * 3600 * 24 - diffHours * 1000 * 3600) / (1000 * 60));

  let str = [];
  diffDays > 0 && str.push(diffDays.toString() + 'd');
  diffHours > 0 && str.push(diffHours.toString() + 'h');
  diffMinutes > 0 && str.push(diffMinutes.toString() + 'm');

  return str.join(' ');
}

export function daysDiff(date1, date2): string {
  let diffDays = 0;

  if (formatDate(date1) !== formatDate(date2)) {
    let diff = new Date(formatDate(date2)).getTime() - new Date(formatDate(date1)).getTime();
    diffDays = Math.floor(diff / (1000 * 3600 * 24));
  }
  return diffDays > 0
    ? '+' + diffDays.toString()
    : (diffDays == 0 ? null : diffDays.toString());
}



function getDictionaryValue(data, key: string, id: number, field: string = 'label') {
  return data.dictionary[key][id][field];
}

export function transformParams(params: SearchParams) {
  return params.searchType === 'roundTrip' ? {
    'common': {
      'searchBounds': [{
        'availability': {'via': {'location': '', 'type': ''}},
        'common': {
          'from': {'location': params.outboundFrom.iata, 'countryCode': params.outboundFrom.countryCode, 'type': null},
          'to': {'location': params.inboundTo.iata, 'countryCode': params.inboundTo.countryCode, 'type': null},
          'date': params.date,
          'endDate': null,
          'depTime': null,
          'arrTime': null,
          'globalIndicator': '',
          'bkgClasses': [''],
          'cabins': ['', '', ''],
          'airlines': [],
          'fromAirportRadius': {'enabled': false, 'distance': 200},
          'toAirportRadius': {'enabled': false, 'distance': 200},
          'radiusNotAvailable': false
        },
        'masterpricer': {
          'manually': true,
          'timeRange': null,
          'moreAirlines': null,
          'excludedAirlines': null,
          'flightNumbers': [{'code': '', 'flight': ''}]
        }
      }, {
        'availability': {'via': {'location': '', 'type': ''}},
        'common': {
          'from': {'location': params.inboundTo.iata, 'countryCode': params.inboundTo.countryCode, 'type': null},
          'to': {'location':  params.outboundFrom.iata, 'countryCode': params.outboundFrom.countryCode, 'type': null},
          'date': params.endDate,
          'endDate': null,
          'depTime': null,
          'arrTime': null,
          'globalIndicator': '',
          'bkgClasses': [''],
          'cabins': ['', '', ''],
          'airlines': [],
          'fromAirportRadius': {'enabled': false, 'distance': 200},
          'toAirportRadius': {'enabled': false, 'distance': 200},
          'radiusNotAvailable': false
        },
        'masterpricer': {
          'manually': true,
          'timeRange': null,
          'moreAirlines': null,
          'excludedAirlines': null,
          'flightNumbers': [{'code': '', 'flight': ''}]
        }
      }],
      'bookingBounds': [],
      'taxes': {'handling': '1', 'specific': {'included': [], 'withhold': [], 'exempted': []}},
      'fees': {'specific': {'included': [], 'exempted': []}},
      'surcharges': {'handling': '1'},
      'currency': null,
      'fareTypes': {'published': true, 'negotiated': true, 'corporate': {'enabled': false, 'corporateCodes': []}},
      'fareRestrictions': [{'param': '', 'code': '', 'label': '', 'value': ''}],
      'nonStop': params.nonStop,
      'seats': 1,
      'groupSeats': 1,
      'bookingActCode': '',
      'airDisplayOrder': 'NEUTRAL',
      'ticketingDate': null,
      'continuousProcessingMode': false,
      'tpos': '',
      'allSectors': {
        'globalIndicator': '',
        'bkgClasses': ['', '', ''],
        'cabins': [''],
        'airlines': [{'code': '', 'flight': ''}, {'code': '', 'flight': ''}, {'code': '', 'flight': ''}]
      }
    },
    'messages': [],
    'availability': {
      'sevenDaySearch': false,
      'directaccess': {'bookingActCode': '', 'seats': 1, 'paxInfo': [], 'messages': []}
    },
    'masterpricer': {
      'websitePublicSelectedList': ['PAR', 'PBE', 'PBP', 'PBQ', 'PCC', 'PCG', 'PDA', 'PDO', 'PDW', 'PDX', 'PDY', 'PEC', 'PEF', 'PEN', 'PEP', 'PEQ', 'PGB', 'PGY', 'PHB', 'PHO', 'PIP', 'PVA'],
      'websiteFareTypes': {'published': true, 'business': true},
      'tripType': 'R',
      'calendarView': false,
      'alternateAirport': {'enabled': false, 'distance': 200, 'metrics': 'K'},
      'sameConnection': false,
      'sameAirport': false,
      'disablePNR': false,
      'preCheckTicketability': false,
      'ptcs': params.ptcs/*[{"code": "ADT", "infantAllowed": true, "category": "ADT", "dateOfBirth": ""}]*/,
      'owc': false,
      'psr': '49408',
      'selectedPresetGroup': -1,
      'orchestration': false,
      'accr': false,
      'radiusEnabled': true,
      'distanceUnit': 'K',
      'enhancedCalendarEnabled': true,
      'selectedCalFlexibility': '3',
      'miniRulesEnabled': false,
      'websiteNegotiatedFaresSelectedList': [],
      'websiteNegotiatedFaresSelectedNumber': 'нет',
      'searchRuning': false,
      'searchedWebfaresNoResults': null,
      'corporateRewards': [],
      'owcOnly': false
    },
    'searchFlavor': 'lowfaresearch'
  } : { // one way
    'common': {
      'searchBounds': [{
        'availability': {'via': {'location': '', 'type': ''}},
        'common': {
          'from': {'location': params.outboundFrom.iata, 'countryCode': params.outboundFrom.countryCode, 'type': null},
          'to': {'location': params.inboundTo.iata, 'countryCode': params.inboundTo.countryCode, 'type': null},
          'date': params.date,
          'endDate': null,
          'depTime': null,
          'arrTime': null,
          'globalIndicator': '',
          'bkgClasses': [''],
          'cabins': ['', '', ''],
          'airlines': [],
          'fromAirportRadius': {'enabled': false, 'distance': 200},
          'toAirportRadius': {'enabled': false, 'distance': 200},
          'radiusNotAvailable': false
        },
        'masterpricer': {
          'manually': true,
          'timeRange': null,
          'moreAirlines': null,
          'excludedAirlines': null,
          'flightNumbers': [{'code': '', 'flight': ''}]
        }
      }],
      'bookingBounds': [],
      'taxes': {'handling': '1', 'specific': {'included': [], 'withhold': [], 'exempted': []}},
      'fees': {'specific': {'included': [], 'exempted': []}},
      'surcharges': {'handling': '1'},
      'currency': null,
      'fareTypes': {'published': true, 'negotiated': true, 'corporate': {'enabled': false, 'corporateCodes': []}},
      'fareRestrictions': [{'param': '', 'code': '', 'label': '', 'value': ''}],
      'nonStop': params.nonStop,
      'seats': 1,
      'groupSeats': 1,
      'bookingActCode': '',
      'airDisplayOrder': 'NEUTRAL',
      'ticketingDate': null,
      'continuousProcessingMode': false,
      'tpos': '',
      'allSectors': {
        'globalIndicator': '',
        'bkgClasses': ['', '', ''],
        'cabins': [''],
        'airlines': [{'code': '', 'flight': ''}, {'code': '', 'flight': ''}, {'code': '', 'flight': ''}]
      }
    },
    'messages': [],
    'availability': {
      'sevenDaySearch': false,
      'directaccess': {'bookingActCode': '', 'seats': 1, 'paxInfo': [], 'messages': []}
    },
    'masterpricer': {
      'websitePublicSelectedList': ['PAR', 'PBE', 'PBP', 'PBQ', 'PCC', 'PCG', 'PDA', 'PDO', 'PDW', 'PDX', 'PDY', 'PEC', 'PEF', 'PEN', 'PEP', 'PEQ', 'PGB', 'PGY', 'PHB', 'PHO', 'PIP', 'PVA'],
      'websiteFareTypes': {'published': true, 'business': true},
      'tripType': 'O',
      'calendarView': false,
      'alternateAirport': {'enabled': false, 'distance': 200, 'metrics': 'K'},
      'sameConnection': false,
      'sameAirport': false,
      'disablePNR': false,
      'preCheckTicketability': false,
      'ptcs': params.ptcs/*[{"code": "ADT", "infantAllowed": true, "category": "ADT", "dateOfBirth": ""}]*/,
      'owc': false,
      'psr': '49408',
      'selectedPresetGroup': -1,
      'orchestration': false,
      'accr': false,
      'radiusEnabled': true,
      'distanceUnit': 'K',
      'enhancedCalendarEnabled': true,
      'selectedCalFlexibility': '3',
      'miniRulesEnabled': false,
      'websiteNegotiatedFaresSelectedList': [],
      'websiteNegotiatedFaresSelectedNumber': 'нет',
      'searchRuning': false,
      'searchedWebfaresNoResults': null,
      'corporateRewards': [],
      'owcOnly': false
    },
    'searchFlavor': 'lowfaresearch'
  };
}
