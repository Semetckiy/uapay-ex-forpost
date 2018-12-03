import { Messages } from '@seco/core';

export const messages: Messages = {
  snb: {
    search_panel: {
      tripType: {
        label: 'Trip type'
      },
      ptc: {
        label: {
          singular: 'Passenger',
          plural: 'Passengers'
        }
      },
      markUpFees: {
        label: 'Margin Manager Model'
      },
      from: {
        label: 'From',
        placeholder: 'ex: NCE'
      },
      fromError: {
        required: 'Field is required',
        notAnObject: 'Please select an airport from the dropdown list'
      },
      to: {
        label: 'To',
        placeholder: 'ex: PAR'
      },
      toError: {
        required: 'Field is required',
        notAnObject: 'Please select an airport from the dropdown list'
      },
      airlinesAndAlliances: {
        label: 'Airlines / Alliances',
        informationIcon: 'Include: IATA code or full name.<br />Exclude: -IATA code or -full name.',
        outbound: 'Outbound',
        inbound: 'Inbound',
        placeholder: 'ex: Air France or AF or *S',
        badgeIncluded: '{0} - included',
        badgeExcluded: '{0} - excluded',
        overflowSpanTitle: '{0} more airlines',
        airlineNotFound: 'Airline/Alliance not found'
      },
      airportSuggestion: {
        allAirports: 'All the airports'
      },
      departureDate: {
        label: 'Departure date',
        placeholder: 'ex: 2018-03-16'
      },
      returnDate: {
        label: 'Return date',
        placeholder: 'ex: 2018-03-28'
      },
      search: {
        button: {
          label: 'Search'
        }
      },
      select: {
        button: {
          label: 'Select'
        }
      },
      nonStopFlights: {
        label: 'Non-Stop flights'
      },
      fareTypes: {
        amadeusFareTypes: 'Fare Types',
        publicFares: 'Public fares',
        negotiatedFares: 'Negotiated fares',
        corporateCodes: 'Corporate codes'
      },
      taxes: {
        withholdTaxes: 'Withhold taxes',
        label: 'Taxes and Fees'
      },
      cabins: {
        label: 'Cabins',
        all: 'All'
      },
      currency: {
        label: 'Currency'
      },
      departureArrival: {
        departure: 'Departure',
        arrival: 'Arrival',
        label: 'Time',
        placeholder: 'hh:mm'
      },
      preset: {
        label: 'Quick search',
        default: 'Select a template'
      }
    },
    result_panel: {
      noResults: 'No results',
      noServiceFees: 'No service fees',
      serviceFeesLabel: 'Service fees: ',
      markupLabel: 'Markup: ',
      discountLabel: 'Discount: ',
      noMarkup: 'No markup',
      totalPrice: 'Total price',
      fareTypeLabel: 'Fare type: ',
      recommendation: {
        fareBreakdown: {
          ptc: 'PTC',
          fareBasis: 'Fare basis',
          fare: 'Fare',
          tax: 'Tax',
          serviceFees: 'Service fees',
          markup: 'Markup',
          total: 'Total'
        }
      },
      book: {
        button: {
          label: 'Book'
        }
      },
      bound: {
        connection: {
          label: {
            singular: 'connection',
            plural: 'connections'
          }
        },
        direct: {
          label: 'Direct'
        },
        operatedBy: {
          label: 'Operated by different airline(s)'
        }
      },
      filters: {
        generic: 'Filters',
        results: '{0} out of {1} results',
        connections: 'Connections',
        price: 'Price',
        baggage: 'Baggage',
        airlines: 'Airlines',
        cabins: 'Cabins',
        withBaggage: 'Included',
        wihtoutBaggage: 'Not Included',
        currentPrice: 'Current price',
        minimumPrice: 'Minimum price',
        maximumPrice: 'Maximum price',
        baggageIncluded: 'Baggage Included',
        baggageNotIncluded: 'Baggage Not Included',
        fareType: 'Fare Type',
        duration: 'Duration',
        minimumDuration: 'Minimum duration',
        maximumDuration: 'Maximum duration',
        currentDuration: 'Current Max duration',
        departureTime: 'Departure Time',
        minDepartureTime: 'Min Departure Time',
        maxDepartureTime: 'Max Departure Time',
        departureTimeStart: 'Departure Time Start',
        dDepartureTimeEnd: 'Departure Time End',
        bookingClass: 'Booking Class'
      },
      pagination: {
        indexesDisplayedMessage: 'Results {0} to {1} out of {2}'
      }
    },
    errors: {
      genericCatchMessage:
        'An unexpected error has occurred. Please try again and contact support if the issue persists.'
    },
    messages: {
      loading: 'Loading...'
    }
  }
};
