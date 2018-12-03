import {Injectable} from '@angular/core';
import {
  Filter,
  FilterCheckbox,
  FilterRange,
  FilterRangeValue,
  FilterSet,
  FilterType,
  ReceivedFilterValue,
} from '../../models/filter.model';
import {Flight, ResultsItem, Segment, Solution} from '../../models/results-item.model';
import * as _ from 'lodash';
import * as dict from '../../models/dictionary.model';

export const CABINS = {
  first: ['A', 'F', 'P'],
  business: ['C', 'D', 'I', 'J', 'Z'],
  economy: ['B', 'G', 'H', 'K', 'L', 'M', 'N', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'],
};

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters: FilterSet;
  private applyingFilters: FilterSet;

  constructor () {}

  public setFilters(filters: FilterSet) {
    this.filters = filters;
  }

  public getFiltersOptions(results: ResultsItem[], dictionary: dict.Dictionary): ReceivedFilterValue {
    return results.length
      ? Object.assign(
        {},
        this.getPriceFilterOptions(results),
        this.getAircompanyFilterOptions(dictionary),
        this.getConnectionsFilterOptions(dictionary),
        this.getCabinFilterOptions(results),
        this.getDurationFilterOptions(results),
      )
      : {}
    ;
  }

  getPriceFilterOptions(results: ResultsItem[]): ReceivedFilterValue {
    let prices = _.map(results, 'price').map(value => parseFloat('' + value));

    return {
      price: {
        range: {
          min: _.min(prices),
          max: _.max(prices),
        },
        unit: results[0].currencyCode,
      }
    };
  }

  private getAircompanyFilterOptions(dictionary: dict.Dictionary): ReceivedFilterValue {
    let airlines = [];

    Object.keys(dictionary.airlines).map((key: string) => {
      let airline: dict.Airline = dictionary.airlines[key];

      airlines.push({
        name: airline.code,
        title: airline.label
      });
    });

    return {aircompany: airlines};
  }

  private getConnectionsFilterOptions(dictionary: dict.Dictionary): ReceivedFilterValue {
    let connections = {connections: []};
    let connectionsCount: number[] = [];

    _.forEach(dictionary.bounds, ((bound: dict.Bound) => {
      _.forEach(bound.solutions, (solution: dict.Solution) => {
        connectionsCount.push(solution.segments.length - 1);
      });
    }));

    _.forEach(_.uniq(connectionsCount), (count) => {
      connections.connections.push({
        name: '' + count,
        title: count,
      });
    });

    return connections;
  }

  getCabinFilterOptions(results: ResultsItem[]): ReceivedFilterValue {
    let options = [];
    let cabins = Object.keys(CABINS);

    for (let resultItem of results) {
      for (let flight of resultItem.flights) {
        for (let solution of flight.solutions) {
          for (let segment of solution.segments) {
            for (let cabin of cabins) {
              if (CABINS[cabin].indexOf(segment.cabin) >= 0) {
                options.push({
                  name: cabin,
                  title: cabin.charAt(0).toUpperCase() + cabin.slice(1),
                });

                cabins.splice(cabins.indexOf(cabin), 1);

                break;
              }
            }
          }
        }
      }
    }

    return {cabin: options};
  }

  getDurationFilterOptions(results: ResultsItem[]): ReceivedFilterValue {
    let initialRange: FilterRangeValue = {min: 0, max: 0};

    return {
      duration: {
        range: results.reduce((range: FilterRangeValue, result: ResultsItem): FilterRangeValue => {
          let currentRange = result.flights[0].solutions.reduce((range: FilterRangeValue, solution: Solution): FilterRangeValue => {
            return {
              min: range.min ? Math.min(range.min, solution.duration) : solution.duration,
              max: range.max ? Math.max(range.max, solution.duration) : solution.duration,
            };
          }, initialRange);

          return {
            min: range.min ? Math.min(range.min, currentRange.min) : currentRange.min,
            max: range.max ? Math.max(range.max, currentRange.max) : currentRange.max,
          };
        }, initialRange),
        unit: 'h',
      }
    };
  }

  public applyFilters(results: ResultsItem[]): ResultsItem[] {
    let resultsCopy: ResultsItem[] = JSON.parse(JSON.stringify(results));
    let applyingFilters = this.getApplyingFilters();

    Object.keys(applyingFilters).map((key: string) => {
      let filter = applyingFilters[key];

      switch (filter.name) {
        case 'price':
          resultsCopy = this.filterByPrice(resultsCopy, filter);
          break;

        case 'aircompany':
          resultsCopy = this.filterByAircompany(resultsCopy, filter);
          break;

        case 'connections':
          resultsCopy = this.filterByConnections(resultsCopy, filter);
          break;

        case 'baggage':
          resultsCopy = this.filterByBaggage(resultsCopy, filter);
          break;

        case 'fare':
          resultsCopy = this.filterByFare(resultsCopy, filter);
          break;

        case 'cabin':
          resultsCopy = this.filterByCabin(resultsCopy, filter);
          break;

        case 'duration':
          resultsCopy = this.filterByDuration(resultsCopy, filter);
          break;
      }
    });

    return resultsCopy;
  }

  private filterByPrice(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let priceFilter = <FilterRange>filter;

    return results.filter((val) => {
      return val.price >= priceFilter.value.min && val.price <= priceFilter.value.max;
    });
  }

  private filterByAircompany(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let aircompanyFilter = <FilterCheckbox>filter;

    return results.filter((val) => {
      let aircompanyMatch = false;

      _.forEach(val.flights, ((flight: Flight) => {
        _.forEach(flight.solutions, ((solution: Solution) => {
          _.forEach(solution.segments, ((segment: Segment) => {
            aircompanyMatch = aircompanyFilter.value.indexOf(segment.carrier.airline.code) >= 0;
          }));
        }));
      }));

      return aircompanyMatch;
    });
  }

  private filterByBaggage(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let baggageFilter = <FilterCheckbox>filter;

    if (!baggageFilter.value.length) {
      return [];
    }

    return results.filter((resultsItem: ResultsItem): boolean => {
      for (let flight of resultsItem.flights) {
        for (let solution of flight.solutions) {
          for (let segment of solution.segments) {
            if (baggageFilter.value.indexOf('yes') >= 0 && segment.baggageAllowance.value === 0) {
              return false;
            }

            if (baggageFilter.value.indexOf('no') >= 0 && segment.baggageAllowance.value > 0) {
              return false;
            }
          }
        }
      }

      return true;
    });
  }

  private filterByFare(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let fareFilter = <FilterCheckbox>filter;

    return results.filter((resultsItem: ResultsItem): boolean => {
      return resultsItem.fareTypeName && fareFilter.value.indexOf(resultsItem.fareTypeName) >= 0;
    });
  }

  private filterByConnections(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let connectionsFilter = <FilterCheckbox>filter;

    _.forEach(results, ((resultItem: ResultsItem, resultItemKey: number) => {
      _.forEach(resultItem.flights, ((flight: Flight, flightKey: number) => {
        _.forEach(flight.solutions, ((solution: Solution, solutionKey: number) => {
          if (
            results['' + resultItemKey] !== undefined
            && (
              connectionsFilter.value.indexOf('' + (solution.segments.length - 1)) === -1
              || !connectionsFilter.value.length
            )
          ) {
            delete results['' + resultItemKey].flights['' + flightKey].solutions[solutionKey];

            if (!results['' + resultItemKey].flights['' + flightKey].solutions.filter(_ => true).length) {
              delete results['' + resultItemKey];
            }
          }
        }));
      }));
    }));

    results = results.filter(_ => true);

    return results;
  }

  private filterByCabin(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let cabinFilter = <FilterCheckbox>filter;

    return results.filter((resultsItem: ResultsItem): boolean => {
      for (let flight of resultsItem.flights) {
        for (let solution of flight.solutions) {
          for (let segment of solution.segments) {
            for (let cabin of cabinFilter.value) {
              if (CABINS[cabin].indexOf(segment.cabin) >= 0) {
                return true;
              }
            }
          }
        }
      }

      return false;
    });
  }

  filterByDuration(results: ResultsItem[], filter: Filter): ResultsItem[] {
    let durationFilter = <FilterRange>filter;

    return results.filter((resultsItem: ResultsItem): boolean => {
      for (let solution of resultsItem.flights[0].solutions) {
        if (solution.duration >= durationFilter.value.min && solution.duration <= durationFilter.value.max) {
          return true;
        }
      }

      return false;
    });
  }

  public getApplyingFilters(): FilterSet {
    this.applyingFilters = {};

    Object.keys(this.filters).map((key: string) => {
      let filter: Filter = this.filters[key];

      switch (filter.type) {
        case FilterType.Checkbox:
          let checkboxFilter = <FilterCheckbox>filter;

          if (filter.defaultValue) {
            if (JSON.stringify(checkboxFilter.value.sort()) !== JSON.stringify(checkboxFilter.defaultValue.sort())) {
              this.applyingFilters[key] = checkboxFilter;
            }
          }

          break;

        case FilterType.Range:
          let filterRange = (<FilterRange>filter);

          if (filter.defaultValue) {
            if (JSON.stringify(filterRange.value) !== JSON.stringify(filterRange.defaultValue)) {
              this.applyingFilters[key] = filterRange;
            }
          }

          break;
      }
    });

    return this.applyingFilters;
  }

  public getTranslatorForFilter(filter: Filter) {
    switch (filter.name) {
      case 'price':
        return (value: number): string => value.toFixed(2) + ' ' + filter.unit;

      case 'duration':
        return (value: number): string => {
          let minutes = value % 60;

          return Math.floor(value / 60) + ':' + (minutes < 10 ? '0' : '') + minutes;
        };
    }
  }
}
