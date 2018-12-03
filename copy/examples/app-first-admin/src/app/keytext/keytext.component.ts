import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dictionary',
  templateUrl: './keytext.component.html',
  styleUrls: ['./keytext.component.css']
})
export class KeytextComponent implements OnInit {

  textsForm: FormGroup;
  submitted = false;

  public currentID;
  public currentCountry;
  public currentLang;
  public currentMode;
  public currentText;

  public setTexts = (id, countryCode, lang, mode, text) => {
    this.currentID = id ? id : null;
    this.currentCountry = countryCode ? countryCode : null;
    this.currentLang = lang ? lang : null;
    this.currentMode = mode ? mode : null;
    this.currentText = text ? text : null;
  }

  modalCmp = ModalExampleModalComponent;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  keytexts = [];
  langs = [];
  lang = '';
  countries = [];
  countryCode = '';
  modes = [];
  mode = '';
  text = '';
  page = 1;
  totalItems = 0;
  sort = 'id';
  order = 'asc';
  sortOrder = 'id';
  sortOrderStored = 'id';
  itemsPerPage = 20;

  loadTotal(countryCode: string, lang: string, mode: string, text: string) {
    this.http.get(`/api/siteTexts/?countryCode=UA&lang=ENG&mode_like=${this.mode}&text_like=${this.text}`).subscribe((x:any) => {
      this.totalItems = x.length;
    });
  }
  loadLang() {
    this.http.get('/api/siteTexts').subscribe((x:any) => {
      this.langs = x.reduce(function(a, c) {
        if (!a.find(y => y === c.lang) && c.lang !== null && c.lang !== '') {
          a.push(c.lang);
        }
        return a;
      }, []).sort();
    });
  }
  loadMode() {
    this.http.get('/api/siteTexts?countryCode=UA&lang=ENG').subscribe((x:any) => {
      this.modes = x.reduce(function(a, c) {
        if (!a.find(y => y === c.mode) && c.mode !== null && c.mode !== '') {
          a.push(c.mode);
        }
        return a;
      }, []).sort();
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
  loadPage(page: number, itemsPerPage: number, countryCode: string, lang: string, mode: string, text: string, sort: string, order: string) {
    // FIXME
    page = typeof page !== 'number' ? this.page : page;
    //
    this.http.get(`/api/siteTexts/?_page=${page}&_limit=${this.itemsPerPage}&countryCode=UA&lang=ENG&mode_like=${this.mode}&text_like=${this.text}&_sort=${this.sort}&_order=${this.order}`).subscribe((x:any) => {
      this.keytexts = x;
      console.log(`/api/siteTexts/?_page=${page}&_limit=${this.itemsPerPage}&countryCode=UA&lang=ENG&mode_like=${this.mode}&text_like=${this.text}&_sort=${this.sort}&_order=${this.order}`);
    });
  }

  ngOnInit() {
    this.loadTotal(this.countryCode, this.lang, this.mode, this.text);
    this.loadLang();
    this.loadCountry();
    this.loadMode();
    this.loadPage(this.page, this.itemsPerPage, this.countryCode, this.lang, this.mode, this.text, this.sort, this.order);
    this.textsForm = this.formBuilder.group({
      modalMode: ['', Validators.required]//,
/*      modalNameLang: ['', Validators.required],
      modalPoints: ['', Validators.required],
      modalQuantity: ['', Validators.required],
      modalActive: ['', Validators.required]*/
    });
  }

  get f() { return this.textsForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.textsForm.invalid) {
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
