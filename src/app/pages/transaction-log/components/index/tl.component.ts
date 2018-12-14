import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  date: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 5900986574, name: 'Hydrogen', date: '12/12/2018', weight: 1.0079, symbol: 'H'},
  {position: 5900988945, name: 'Helium', date: '12/11/2018', weight: 4.0026, symbol: 'He'},
  {position: 5900982596, name: 'Lithium', date: '12/10/2018', weight: 6.941, symbol: 'Li'},
  {position: 5900989821, name: 'Beryllium', date: '12/12/2018', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-tl',
  templateUrl: './tl.component.html',
  styleUrls: ['./tl.component.css']
})

export class TlComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'date', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  states = new FormControl();
  statesList: string[] = [
    'ПНФП 001', 'ПНФП 002', 'ПНФП 003', 'ПНФП 004', 'ПНФП 005', 'ПНФП 006', 'ПНФП 007',
    'ПНФП 008', 'ПНФП 009', 'ПНФП 010', 'ПНФП 011', 'ПНФП 012', 'ПНФП 006', 'ПНФП 013'
  ];

  currentDate = new Date();
  futureDate = new Date();

  dateFrom = new FormControl({value: this.currentDate, disabled: true});
  dateTo = new FormControl({value: this.currentDate, disabled: true});

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router
  ) {
    this.dateTo.setValue(new Date(this.futureDate.setDate(this.currentDate.getDate() + 2)));
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  test() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
