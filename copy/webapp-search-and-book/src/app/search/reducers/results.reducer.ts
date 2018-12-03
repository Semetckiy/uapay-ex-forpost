import {ResultsActions, ResultsActionTypes} from '../actions/results.actions';
import {ResultsItem} from '../models/results-item.model';
import {SearchParams} from '../models/search-params.model';

export interface Pages {
  total: number;
  current: number;
  limit: number;
}

export interface Progress {
  total: number;
  done: number;
}

export interface Recap {
  enabled: boolean
}

enum Ordering {
  Asc = 'asc',
  Desc = 'desc',
}

export interface Sorting {
  column: string;
  ordering: Ordering;
}

export interface State {
  results: ResultsItem[];
  resultCount: number;
  totalResultCount: number;
  pages: Pages;
  progress: Progress;
  sorting: Sorting;
  searchParams: SearchParams;
  errorMessage: string;
  recap: Recap;
}

function getInitialState(): State {
  return {
    results: [],
    resultCount: 0,
    totalResultCount: 0,
    pages: {
      current: 1,
      total: 0,
      limit: 10,
    },
    progress: {
      total: 0,
      done: 0,
    },
    recap: {
      enabled: false
    },
    sorting: {
      column: 'price',
      ordering: Ordering.Asc
    },
    searchParams: null,
    errorMessage: '',
  };
}

const initialState: State = getInitialState();

export function reducer(
  state = initialState,
  action: ResultsActions,
): State {
  switch (action.type) {
    case ResultsActionTypes.Init: {
      return {
        ...getInitialState(),
        progress: {
          total: 1,
          done: 0,
        },
        recap: {
          enabled: false
        },
        searchParams: action.payload.searchParams
      };
    }

    case ResultsActionTypes.IsEnableRecapPanel: {
      state = {...state};

      state.recap = action.payload.recap;

      return state;
    }

    case ResultsActionTypes.Receive: {
      state = {...state};

      state.results = action.payload;

      return state;
    }

    case ResultsActionTypes.ReceiveCount: {
      state = {...state};

      state.resultCount = action.payload;

      // Update total pages number
      state.pages = Object.assign({}, state.pages);
      state.pages.total = Math.floor(action.payload / state.pages.limit);

      return state;
    }

    case ResultsActionTypes.ReceiveTotalCount: {
      state = {...state};

      state.totalResultCount = action.payload;

      return state;
    }

    case ResultsActionTypes.PageChange: {
      state = {...state};

      state.pages.current = action.payload.page;

      return state;
    }

    case ResultsActionTypes.ReceiveProgress: {
      state = {...state};

      state.progress = action.payload;

      return state;
    }

    case ResultsActionTypes.ReceiveError: {
      state = {...state};

      state.errorMessage = action.payload;
      state.progress.done = state.progress.total;

      console.error(action.payload);

      if (typeof action.payload === 'object' && action.payload !== null && action.payload['name'] === 'HttpErrorResponse') {
        state.errorMessage = 'Http error response';
      }

      return state;
    }

    case ResultsActionTypes.ClearError: {
      state = {...state};

      state.errorMessage = '';

      return state;
    }

    default: {
      return state;
    }
  }
}
