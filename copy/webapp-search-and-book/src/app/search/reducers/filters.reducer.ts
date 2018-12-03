import {Filter, FilterOption, FilterRangeOptions, FilterSet, FilterType} from '../models/filter.model';
import {FiltersActions, FiltersActionTypes} from '../actions/filters.actions';
import * as _ from 'lodash';

const initialState: FilterSet = {
  price: {
    name: 'price',
    title: 'Price',
    type: FilterType.Range,
    value: null,
    defaultValue: null,
    order: 1,
    range: null,
    unit: '$',
    step: 0.01,
  },
  connections: {
    name: 'connections',
    title: 'Connections',
    type: FilterType.Checkbox,
    value: [],
    defaultValue: [],
    order: 2,
    options: [],
    defaultOptions: [],
  },
  baggage: {
    name: 'baggage',
    title: 'Baggage allowance',
    type: FilterType.Checkbox,
    value: ['no', 'yes'],
    defaultValue: ['no', 'yes'],
    order: 3,
    options: [
      {
        name: 'no',
        title: 'No baggage',
      },
      {
        name: 'yes',
        title: 'One or more pieces',
      },
    ],
  },
  fare: {
    name: 'fare',
    title: 'Fare type',
    type: FilterType.Checkbox,
    value: ['Public', 'Nego'],
    defaultValue: ['Public', 'Nego'],
    order: 4,
    options: [
      {
        name: 'Public',
        title: 'Public',
      },
      {
        name: 'Nego',
        title: 'Nego',
      },
    ],
  },
  aircompany: {
    name: 'aircompany',
    title: 'Airlines/Alliances',
    type: FilterType.Checkbox,
    value: [],
    defaultValue: [],
    order: 5,
    options: [],
  },
  cabin: {
    name: 'cabin',
    title: 'Cabin',
    type: FilterType.Checkbox,
    value: ['first', 'business', 'economy'],
    defaultValue: ['first', 'business', 'economy'],
    order: 6,
    options: [
      {
        name: 'first',
        title: 'First',
      },
      {
        name: 'business',
        title: 'Business',
      },
      {
        name: 'economy',
        title: 'Economy',
      },
    ],
  },
  duration: {
    name: 'duration',
    title: 'Trip duration',
    type: FilterType.Range,
    value: null,
    defaultValue: null,
    order: 7,
    range: null,
    unit: 'h',
    step: 1,
  },
};

export function reducer(state = initialState, action: FiltersActions): FilterSet {
  switch (action.type) {
    case FiltersActionTypes.ReceiveOptions: {
      state = {...state};

      Object.keys(action.payload).map((filterKey: string) => {
        let filter = <Filter>state[filterKey];

        if (filter) {
          switch (filter.type) {
            case FilterType.Checkbox:
              let filterCheckboxOptions = <FilterOption[]>action.payload[filterKey];

              filter.options = filterCheckboxOptions;
              filter.defaultValue = _.map(filterCheckboxOptions, 'name');
              filter.value = _.map(filterCheckboxOptions, 'name');

              break;

            case FilterType.Range:
              let filterRangeOptions = <FilterRangeOptions>action.payload[filterKey];

              filter.range = Object.assign({}, filterRangeOptions.range);
              filter.defaultValue = Object.assign({}, filterRangeOptions.range);
              filter.value = Object.assign({}, filterRangeOptions.range);
              filter.unit = filterRangeOptions.unit;

              break;
          }
        }
      });

      return state;
    }

    case FiltersActionTypes.ValueApply: {
      state = {...state};

      let filter = state[action.payload.filterName];

      switch (filter.type) {
        case FilterType.Checkbox:
          filter.value = Object.assign([], action.payload.value);

          break;

        case FilterType.Range:
          filter.value = Object.assign({}, action.payload.value);

          break;
      }

      return state;
    }

    default: {
      return state;
    }

    case FiltersActionTypes.Reset: {
      state = {...state};

      Object.keys(state).map((filterKey: string) => {
        let filter = state[filterKey];
        let defaultValue;

        if (filter.defaultValue instanceof Array) {
          defaultValue = [...filter.defaultValue];
        } else {
          defaultValue = {...filter.defaultValue};
        }

        state[filterKey] = Object.assign({}, filter, {value: defaultValue});
      });

      return state;
    }
  }
}
