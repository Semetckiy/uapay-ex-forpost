import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  // name: string;
  // date: string;
  // position: number;
  // weight: number;
  // symbol: string;

  id: number;
  type: string;
  typeOper: string;
  date: string;
  amountIn: number;
  amountOut: number;
  commIn: number;
  commOut: number;
  cashier: string;
  rroSerial: string;
  rroNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 5900989147, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 10:56', amountIn: 152.00, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32654' },
  { id: 5900989827, type: 'перевод мгновенный', typeOper: 'прием', date: '12/10/2018 17:15', amountIn: 256.89, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32655' },
  { id: 5900989789, type: 'перевод мгновенный', typeOper: 'выдача', date: '12/11/2018 14:02', amountIn: 0.00, amountOut: -650.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32656' },
  { id: 5900989827, type: 'перевод мгновенный', typeOper: 'возврат', date: '12/01/2018 22:10', amountIn: 0.00, amountOut: -4550.89, commIn: 0.00, commOut: -15.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32657' },
  { id: 5900989456, type: 'перевод мгновенный', typeOper: 'прием', date: '12/24/2018 09:36', amountIn: 152.00, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32658' },
  { id: 5900989369, type: 'перевод мгновенный', typeOper: 'выдача', date: '12/06/2018 16:32', amountIn: 0.00, amountOut: -150.00, commIn: 0.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32659' },
  { id: 5900989123, type: 'перевод мгновенный', typeOper: 'прием', date: '12/01/2018 16:23', amountIn: 1560.80, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32660' },
  { id: 5900989521, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 09:12', amountIn: 301.42, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32661' },
  { id: 5900989522, type: 'перевод мгновенный', typeOper: 'возврат', date: '12/15/2018 12:01', amountIn: 0.00, amountOut: -350.25, commIn: 0.00, commOut: -15.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32662' },
  { id: 5900989453, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 10:31', amountIn: 450.00, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32663' },
  { id: 5900989854, type: 'перевод мгновенный', typeOper: 'возврат', date: '12/05/2018 15:49', amountIn: 0.00, amountOut: -253.12, commIn: 0.00, commOut: -15.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32664' },
  { id: 5900989745, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 10:56', amountIn: 37.00, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32665' },
  { id: 5900989652, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 10:57', amountIn: 110.01, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32666' },
  { id: 5900989194, type: 'перевод мгновенный', typeOper: 'прием', date: '12/12/2018 16:26', amountIn: 162.00, amountOut: 0.00, commIn: 15.00, commOut: 0.00, cashier: 't.test', rroSerial: 'AT042000052', rroNumber: '32667' }
];


@Component({
  selector: 'app-tl',
  templateUrl: './tl.component.html',
  styleUrls: ['./tl.component.css']
})

export class TlComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'type', 'typeOper', 'date', 'amountIn', 'amountOut', 'commIn', 'commOut', 'cashier', 'rroSerial', 'rroNumber'];
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

  getTotalCost(coll) {
    return this.dataSource.data.map(t => t[coll]).reduce((acc, value) => acc + value, 0);
  }

}
