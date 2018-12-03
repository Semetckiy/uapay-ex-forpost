import { Component, Input, OnInit } from '@angular/core';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import * as resultsActions from '../../actions/results.actions';


@Component({
  selector: 'app-search-recap',
  templateUrl: './search-recap.component.html',
  styleUrls: ['./search-recap.component.css']
})
export class SearchRecapComponent implements OnInit {

  @Input() resultState;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() { }

  getPtcsGroups(searchParams) {

    let ptcsGroups = [];

    let groups = searchParams.ptcs.reduce(function(obj, item) {
      obj[item.code] = obj[item.code] || [];
      obj[item.code].push(item.category);
      return obj;
    }, {});

    return ptcsGroups = Object.keys(groups).map(function(key){
      return {code: key, category: groups[key]};
    });

  }

  disableRecapPanel() {
    this.store.dispatch(new resultsActions.IsEnableRecapPanel({recap: {enabled:false}}));
  }

}
