import {ResultsItem} from "../models/results-item.model";

export const mockTransformedData: ResultsItem[] = [
  {
    id: 'TUFTVEVSUFJJQ0VSIzA=',
    price: 594.58,
    currencyCode: 'EUR',
    travelShopperTicket: 1,
    flights: [
      {
        departure: false,
        arrival: true,
        solutions: [
          {
            id: 2, // hard coded
            departureDate: "2018-10-08",
            departureTime: "06:50",
            departureLocation: "AMS",
            arrivalDate: "2018-10-08",
            arrivalTime: "07:35",
            arrivalLocation: "BRU",
            duration: 45,

            segments: [{
              cabin: "M",

              bookingClass: {"availability": 9, "classOfService": "X"},
              baggageAllowance: {"unit": "pc", "value": 0},
              flightNumber: '333',
              carrier: {
                airline: {"code": "KL", "label": "KLM Royal Dutch Airlines"},
                airlineDetails: {
                  class: {
                    code: "LIGHTTWO",
                    name: "ECONOMY LIGHT TWO"
                  },
                  fareFamilyServices: [
                    { description: "CHECKED BAG 1PC OF 23KG 158CM", subtype: "0C3", type: "BG" },
                    { description: "SNACK", subtype: "0AT", type: "ML" },
                    { description: "BEVERAGE", subtype: "0AX", type: "ML" },
                    { description: "REFUNDABLE TICKET", subtype: "056", type: "BF" },
                    { description: "CHANGEABLE TICKET", subtype: "059", type: "BF" },
                    { description: "LIGHT MILES ACCRUAL", subtype: "06A", type: "BF"},
                    { description: "SKY PRIORITY", subtype: "07G", type: "BF" }
                  ]
                },
                operatingAirline: null,
                departureDate: "2018-10-08",
                departureTime: "06:50",
                departureLocation: "AMS",
                arrivalDate: "2018-10-08",
                arrivalTime: "07:35",
                arrivalLocation: "BRU"
              }
            }],
          },
        ]
      }, {
        arrival: false,
        departure: true,
        solutions: [
          {
            id: 3, // hard coded
            departureDate: "2018-10-18",
            departureTime: "06:10",
            departureLocation: "BRU",
            arrivalDate: "2018-10-18",
            arrivalTime: "07:05",
            arrivalLocation: "AMS",
            duration: 55,

            segments: [{
              cabin: "M",
              bookingClass: {"availability": 9, "classOfService": "X"},
              baggageAllowance: {"unit": "pc", "value": 0},
              flightNumber: '333',
              carrier: {
                airline: {"code": "KL", "label": "KLM Royal Dutch Airlines"},
                airlineDetails: {
                  class: {
                    code: "LIGHTTWO",
                    name: "ECONOMY LIGHT TWO"
                  },
                  fareFamilyServices: [
                    { description: "CHECKED BAG 1PC OF 23KG 158CM", subtype: "0C3", type: "BG" },
                    { description: "SNACK", subtype: "0AT", type: "ML" },
                    { description: "BEVERAGE", subtype: "0AX", type: "ML" },
                    { description: "REFUNDABLE TICKET", subtype: "056", type: "BF" },
                    { description: "CHANGEABLE TICKET", subtype: "059", type: "BF" },
                    { description: "LIGHT MILES ACCRUAL", subtype: "06A", type: "BF"},
                    { description: "SKY PRIORITY", subtype: "07G", type: "BF" }
                  ]
                },
                operatingAirline: null,
                departureDate: "2018-10-18",
                departureTime: "06:10",
                departureLocation: "BRU",
                arrivalDate: "2018-10-18",
                arrivalTime: "07:05",
                arrivalLocation: "AMS",
              }
            }],
          }
        ]
      }
    ]
  }
];


const example = {
  "id": 0,
  "priceBreakdown": {"priceWithoutTax": 244, "tax": 298.08, "serviceFees": 0, "markup": 0, "total": 594.57996},
  "passengerPriceBreakdowns": [{
    "priceBreakdown": {
      "priceWithoutTax": 58,
      "tax": 74.52,
      "serviceFees": 0,
      "markup": 0,
      "total": 147.51999
    },
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "ADT", "label": "Adult"}, {"code": "ADT", "label": "Adult"}],
    "travellerId": 1
  }, {
    "priceBreakdown": {"priceWithoutTax": 58, "tax": 74.52, "serviceFees": 0, "markup": 0, "total": 147.51999},
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "ADT", "label": "Adult"}, {"code": "ADT", "label": "Adult"}],
    "travellerId": 2
  }, {
    "priceBreakdown": {"priceWithoutTax": 6, "tax": 0, "serviceFees": 0, "markup": 0, "total": 6},
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "INF", "label": "Infant (0-1)"}, {"code": "INF", "label": "Infant (0-1)"}]
  }, {
    "priceBreakdown": {"priceWithoutTax": 58, "tax": 74.52, "serviceFees": 0, "markup": 0, "total": 147.51999},
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "ADT", "label": "Adult"}, {"code": "ADT", "label": "Adult"}],
    "travellerId": 3
  }, {
    "priceBreakdown": {"priceWithoutTax": 6, "tax": 0, "serviceFees": 0, "markup": 0, "total": 6},
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "INF", "label": "Infant (0-1)"}, {"code": "INF", "label": "Infant (0-1)"}]
  }, {
    "priceBreakdown": {"priceWithoutTax": 58, "tax": 74.52, "serviceFees": 0, "markup": 0, "total": 140.01999},
    "fareBasisPerSolution": ["XSRNL", "XSRNL"],
    "pricedPTCPerSolution": [{"code": "CHD", "label": null}, {"code": "CHD", "label": null}],
    "travellerId": 4
  }],
  "fareType": {"code": "RP", "label": "Public"},
  "currency": "EUR",
  "solutions": [{
    "departureDate": "2018-10-08T03:50:00.000Z",
    "arrivalDate": "2018-10-08T04:35:00.000Z",
    "duration": 45,
    "departureLocation": "AMS",
    "arrivalLocation": "BRU",
    "segments": [{
      "cabin": "M",
      "bookingClass": {"availability": 9, "classOfService": "X"},
      "baggageAllowance": {"unit": "pc", "value": 0},
      "carrier": {
        "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
        "airlineDetails": {
          "class": {
            "code": "LIGHTTWO",
            "name": "ECONOMY LIGHT TWO"
          },
          "fareFamilyServices": [
            { "description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG" },
            { "description": "SNACK", "subtype": "0AT", "type": "ML" },
            { "description": "BEVERAGE", "subtype": "0AX", "type": "ML" },
            { "description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF" },
            { "description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF" },
            { "description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"},
            { "description": "SKY PRIORITY", "subtype": "07G", "type": "BF" }
          ]
        },
        "operatingAirline": null,
        "departureDate": "2018-10-08T03:50:00.000Z",
        "departureLocation": "AMS",
        "arrivalDate": "2018-10-08T04:35:00.000Z",
        "arrivalLocation": "BRU"
      },
      "fareFamily": {
        "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
        "airlineDetails": {
          "class": {
            "code": "LIGHTTWO",
            "name": "ECONOMY LIGHT TWO"
          },
          "fareFamilyServices": [
            { "description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG" },
            { "description": "SNACK", "subtype": "0AT", "type": "ML" },
            { "description": "BEVERAGE", "subtype": "0AX", "type": "ML" },
            { "description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF" },
            { "description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF" },
            { "description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"},
            { "description": "SKY PRIORITY", "subtype": "07G", "type": "BF" }
          ]
        },
        "code": "LIGHTTWO",
        "name": "ECONOMY LIGHT TWO",
        "services": [{
          "ffServiceId": 0,
          "status": "CHA",
          "ffService": {"description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG"}
        }, {
          "ffServiceId": 1,
          "status": "INC",
          "ffService": {"description": "SNACK", "subtype": "0AT", "type": "ML"}
        }, {
          "ffServiceId": 2,
          "status": "INC",
          "ffService": {"description": "BEVERAGE", "subtype": "0AX", "type": "ML"}
        }, {
          "ffServiceId": 3,
          "status": "NOF",
          "ffService": {"description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF"}
        }, {
          "ffServiceId": 4,
          "status": "CHA",
          "ffService": {"description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF"}
        }, {
          "ffServiceId": 5,
          "status": "INC",
          "ffService": {"description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"}
        }, {
          "ffServiceId": 6,
          "status": "NOF",
          "ffService": {"description": "SKY PRIORITY", "subtype": "07G", "type": "BF"}
        }]
      }
    }],
    "fareFamily": {
      "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
      "code": "LIGHTTWO",
      "name": "ECONOMY LIGHT TWO",
      "services": [{
        "ffServiceId": 0,
        "status": "CHA",
        "ffService": {"description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG"}
      }, {
        "ffServiceId": 1,
        "status": "INC",
        "ffService": {"description": "SNACK", "subtype": "0AT", "type": "ML"}
      }, {
        "ffServiceId": 2,
        "status": "INC",
        "ffService": {"description": "BEVERAGE", "subtype": "0AX", "type": "ML"}
      }, {
        "ffServiceId": 3,
        "status": "NOF",
        "ffService": {"description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF"}
      }, {
        "ffServiceId": 4,
        "status": "CHA",
        "ffService": {"description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF"}
      }, {
        "ffServiceId": 5,
        "status": "INC",
        "ffService": {"description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"}
      }, {
        "ffServiceId": 6,
        "status": "NOF",
        "ffService": {"description": "SKY PRIORITY", "subtype": "07G", "type": "BF"}
      }]
    },
    "elementRef": 63,
    "technicalStops": []
  }, {
    "departureDate": "2018-10-18T03:10:00.000Z",
    "arrivalDate": "2018-10-18T04:05:00.000Z",
    "duration": 55,
    "departureLocation": "BRU",
    "arrivalLocation": "AMS",
    "segments": [{
      "cabin": "M",
      "bookingClass": {"availability": 9, "classOfService": "X"},
      "baggageAllowance": {"unit": "pc", "value": 0},
      "carrier": {
        "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
        "airlineDetails": {
          "class": {
            "code": "LIGHTTWO",
            "name": "ECONOMY LIGHT TWO"
          },
          "fareFamilyServices": [
            { "description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG" },
            { "description": "SNACK", "subtype": "0AT", "type": "ML" },
            { "description": "BEVERAGE", "subtype": "0AX", "type": "ML" },
            { "description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF" },
            { "description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF" },
            { "description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"},
            { "description": "SKY PRIORITY", "subtype": "07G", "type": "BF" }
          ]
        },
        "operatingAirline": null,
        "departureDate": "2018-10-18T03:10:00.000Z",
        "departureLocation": "BRU",
        "arrivalDate": "2018-10-18T04:05:00.000Z",
        "arrivalLocation": "AMS"
      },
      "fareFamily": {
        "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
        "code": "LIGHTTWO",
        "name": "ECONOMY LIGHT TWO",
        "services": [{
          "ffServiceId": 0,
          "status": "CHA",
          "ffService": {"description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG"}
        }, {
          "ffServiceId": 1,
          "status": "INC",
          "ffService": {"description": "SNACK", "subtype": "0AT", "type": "ML"}
        }, {
          "ffServiceId": 2,
          "status": "INC",
          "ffService": {"description": "BEVERAGE", "subtype": "0AX", "type": "ML"}
        }, {
          "ffServiceId": 3,
          "status": "NOF",
          "ffService": {"description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF"}
        }, {
          "ffServiceId": 4,
          "status": "CHA",
          "ffService": {"description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF"}
        }, {
          "ffServiceId": 5,
          "status": "INC",
          "ffService": {"description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"}
        }, {
          "ffServiceId": 6,
          "status": "NOF",
          "ffService": {"description": "SKY PRIORITY", "subtype": "07G", "type": "BF"}
        }]
      }
    }],
    "fareFamily": {
      "airline": {"code": "KL", "label": "KLM Royal Dutch Airlines"},
      "code": "LIGHTTWO",
      "name": "ECONOMY LIGHT TWO",
      "services": [{
        "ffServiceId": 0,
        "status": "CHA",
        "ffService": {"description": "CHECKED BAG 1PC OF 23KG 158CM", "subtype": "0C3", "type": "BG"}
      }, {
        "ffServiceId": 1,
        "status": "INC",
        "ffService": {"description": "SNACK", "subtype": "0AT", "type": "ML"}
      }, {
        "ffServiceId": 2,
        "status": "INC",
        "ffService": {"description": "BEVERAGE", "subtype": "0AX", "type": "ML"}
      }, {
        "ffServiceId": 3,
        "status": "NOF",
        "ffService": {"description": "REFUNDABLE TICKET", "subtype": "056", "type": "BF"}
      }, {
        "ffServiceId": 4,
        "status": "CHA",
        "ffService": {"description": "CHANGEABLE TICKET", "subtype": "059", "type": "BF"}
      }, {
        "ffServiceId": 5,
        "status": "INC",
        "ffService": {"description": "LIGHT MILES ACCRUAL", "subtype": "06A", "type": "BF"}
      }, {
        "ffServiceId": 6,
        "status": "NOF",
        "ffService": {"description": "SKY PRIORITY", "subtype": "07G", "type": "BF"}
      }]
    },
    "elementRef": 68,
    "technicalStops": []
  }],
  "recommendationId": "TUFTVEVSUFJJQ0VSIzg=",
  "isNDC": false,
  "searchData": {
    "bounds": [{
      "arrival": {
        "city": {"code": "BRU", "label": "Brussels"},
        "country": {"code": "BE", "label": "Belgium"},
        "location": {"code": "BRU", "label": "Brussels"}
      },
      "date": "2018-10-07T21:00:00.000Z",
      "departure": {
        "city": {"code": "AMS", "label": "Amsterdam"},
        "country": {"code": "NL", "label": "Netherlands"},
        "location": {"code": "AMS", "label": "Amsterdam"}
      }
    }, {
      "arrival": {
        "city": {"code": "AMS", "label": "Amsterdam"},
        "country": {"code": "NL", "label": "Netherlands"},
        "location": {"code": "AMS", "label": "Amsterdam"}
      },
      "date": "2018-10-17T21:00:00.000Z",
      "departure": {
        "city": {"code": "BRU", "label": "Brussels"},
        "country": {"code": "BE", "label": "Belgium"},
        "location": {"code": "BRU", "label": "Brussels"}
      }
    }],
    "travellers": [{"id": 0, "ptc": {"code": "ADT", "label": "Adult"}}, {
      "id": 1,
      "ptc": {"code": "ADT", "label": "Adult"}
    }, {"id": 3, "ptc": {"code": "ADT", "label": "Adult"}}, {"id": 5, "ptc": {"code": "CHD", "label": null}}],
    "tripType": "R"
  }
};
