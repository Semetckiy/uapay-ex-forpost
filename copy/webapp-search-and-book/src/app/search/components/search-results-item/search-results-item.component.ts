import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResultsItem, Solution} from '../../models/results-item.model';
import {HttpService} from '@seco/core';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css']
})
export class SearchResultsItemComponent implements OnInit {

  @Input() searchResult: ResultsItem;
  @Input() key: number;
  @Output() book: EventEmitter<any> = new EventEmitter<any>();

  departureDateFilter = [];
  departureDateFilterValues = [];
  selectedSolutions = [];

  airlineLabel: string = '';
  isCollapsed: boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.searchResult) {
      let airlines = [];

      this.searchResult.flights.map((flight, flightIndex) => {
        this.departureDateFilter[flightIndex] = flight.solutions[0].departureTime;
        this.selectDefaultSolution(flightIndex, flight.solutions[0].departureTime);

        this.departureDateFilterValues[flightIndex] = flight.solutions.reduce(
            (summ, solution) => {summ.push(solution.departureTime); return summ;},
            []
        )
        .reduce(
            (a, label) => a.indexOf(label) !== -1 ? a : a.concat(label),
            []
        ).sort();

        airlines = flight.solutions
          .map(solutionResult => solutionResult.segments[0].carrier.airline.label)
          .reduce(
              (a, label) => a.indexOf(label) !== -1 ? a : a.concat(label),
              airlines
          );

      });
      this.airlineLabel = airlines.join(', ');
    }
  }

  selectDepartureTime(i, data) {
    this.departureDateFilter[i] = data;
    this.selectDefaultSolution(i, data);
  }

  selectSolution(flightIndex, solutionId) {
    this.selectedSolutions[flightIndex] = solutionId;
  }

  selectDefaultSolution(flightIndex: number, departureTime?: string ) {
    for (let solution of this.searchResult.flights[flightIndex].solutions) {
      if (!departureTime || departureTime == solution.departureTime) {
        this.selectedSolutions[flightIndex] = solution.id;
        break;
      }
    }
  }

  // setDefaultChecked(j, defaultItem) {
  //   this.departureDateFilter = defaultItem;
  //   return j == 0;
  // }

  onBook(recommendationId, travelShopperTicket) {
    this.book.emit({
      book: {
        elements: this.selectedSolutions,
        recommendationId,
        travelShopperTicket,
      },
      searchResult: this.searchResult
    });
  }

}
