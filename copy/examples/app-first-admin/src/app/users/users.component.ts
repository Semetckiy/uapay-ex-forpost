import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  public currentID;
  public currentNumber;
  public currentData;
  public currentTitle;
  public currentName;
  public currentSecondName;
  public currentCountry;
  public currentBirthdayDay;
  public currentBirthdayMonth;
  public currentPhone;
  public currentMobilePhone;
  public currentOfficeID;
  public currentAgency;
  public currentAddress;
  public currentEmail;
  public currentDeliveryAddress;
  public currentTaxOK;
  public currentActive;

  userDataArray: {[key:string]: any} = {};
  userDataPairs = [];

  public setUser = (id, number, data, name, secondName, countryCode, birthdayDay, birthdayMonth, tempo, agency, address, email, active) => {
    this.currentID = id ? id : null;
    this.currentNumber = number ? number : null;
    this.currentData = data ? data : null;

    if (data) {
      this.userDataPairs = this.currentData.split('^');
      for (let i in this.userDataPairs) {
        let split = this.userDataPairs[i].split('=');
        this.userDataArray[split.shift()] = split.join('=');
      }
    }
    this.currentTitle = this.userDataArray.title && id ? this.userDataArray.title : null;
    this.currentPhone = this.userDataArray.phone && id ? this.userDataArray.phone : null;
    this.currentMobilePhone = this.userDataArray.phoneMob && id ? this.userDataArray.phoneMob : null;
    this.currentDeliveryAddress = this.userDataArray.deliveryAddress && id ? this.userDataArray.deliveryAddress : null;
    this.currentTaxOK = this.userDataArray.taxOK && id ? this.userDataArray.taxOK : null;

    this.currentName = name ? name : null;
    this.currentSecondName = secondName ? secondName : null;
    this.currentCountry = countryCode ? countryCode : null;
    this.currentBirthdayDay = birthdayDay ? birthdayDay : null;
    this.currentBirthdayMonth = birthdayMonth ? birthdayMonth : null;
    this.currentOfficeID = tempo && id ? tempo : null;
    this.currentAgency = agency && id ? agency : null;
    this.currentAddress = address && id ? address : null;
    this.currentEmail = email && id ? email : null;
    this.currentActive = active && id ? active : null;
  }

  modalCmp = ModalExampleModalComponent;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  users = [];
  countries = [];
  // FIX needed: active page of paginator if page set other than "1", works fine if [collectionSize]="390" instead of [collectionSize]="totalItems"
  page = 1;
  totalItems = 0;
  id = '';
  newsletter = '';
  number = '';
  title = '';
  name = '';
  secondName = '';
  sort = 'id';
  order = 'asc';
  sortOrder = 'id';
  sortOrderStored = 'id';
  countryCode = '';
  birthdayDay = '';
  birthdayMonth = '';
  phoneMob = '';
  agency = '';
  active = '';
  taxOK = '';
  itemsPerPage = 20;

  loadTotal(number: string, title: string, name: string, secondName: string, countryCode: string, birthdayDay: string, birthdayMonth: string, phoneMob: string, agency: string, active: string, taxOK: string) {
    this.http.get(`/api/firstUsers/?number_like=${this.number}&data_like=${this.title}&name_like=${this.name}&secondName_like=${this.secondName}&countryCode_like=${this.countryCode}&birthdayDay_like=${this.birthdayDay}&birthdayMonth_like=${this.birthdayMonth}&agency_like=${this.agency}&active_like=${this.active}&email_ne=REMOVED`).subscribe((x:any) => {
      this.totalItems = x.length;
    });
  }
  loadCountry() {
    this.http.get('/api/countries').subscribe((x:any) => {
      this.countries = x.sort((y, z) => y.countryName >= z.countryName ? 1 : -1).reduce(function(a, c) {
        a[c.countryName] = c.code;
        return a;
      }, []);
    });
  }
  changeOrder(sortOrder) {
    if (sortOrder === this.sortOrderStored) this.order = this.order === 'asc' ? 'desc' : 'asc'; 
    this.sortOrderStored = sortOrder;
  }
  loadPage(page: number, itemsPerPage: number, number: string, title: string, name: string, secondName: string, countryCode: string, birthdayDay: string, birthdayMonth: string, phoneMob: string, agency: string, active: string, taxOK: string, sort: string, order: string) {
    // FIXME
    page = typeof page !== 'number' ? this.page : page;
    //
    this.http.get(`/api/firstUsers/?_page=${page}&_limit=${this.itemsPerPage}&number_like=${this.number}&data_like=${this.title}&name_like=${this.name}&secondName_like=${this.secondName}&countryCode_like=${this.countryCode}&birthdayDay_like=${this.birthdayDay}&birthdayMonth_like=${this.birthdayMonth}&agency_like=${this.agency}&active_like=${this.active}&_sort=${this.sort}&_order=${this.order}&email_ne=REMOVED`).subscribe((x:any) => {
      this.users = x;
      console.log(`/api/firstUsers/?_page=${page}&_limit=${this.itemsPerPage}&number_like=${this.number}&data_like=${this.title}&name_like=${this.name}&secondName_like=${this.secondName}&countryCode_like=${this.countryCode}&birthdayDay_like=${this.birthdayDay}&birthdayMonth_like=${this.birthdayMonth}&agency_like=${this.agency}&active_like=${this.active}&_sort=${this.sort}&_order=${this.order}&email_ne=REMOVED`);
    });
  }

  ngOnInit() {
    this.loadTotal(this.number, this.title, this.name, this.secondName, this.countryCode, this.birthdayDay, this.birthdayMonth, this.phoneMob, this.agency, this.active, this.taxOK);
    this.loadCountry();
    this.loadPage(this.page, this.itemsPerPage, this.number, this.title, this.name, this.secondName, this.countryCode, this.birthdayDay, this.birthdayMonth, this.phoneMob, this.agency, this.active, this.taxOK, this.sort, this.order);
    this.userForm = this.formBuilder.group({
      modalName: ['', Validators.required]/*,
      modalPoints: ['', Validators.required],
      modalQuantity: ['', Validators.required],
      modalActive: ['', Validators.required]*/
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }
}
export class ModalExampleModalComponent {
  constructor(public activeModal: NgbActiveModal){}
  onClick(reason: string){
    this.activeModal.close(reason);
  }
}
