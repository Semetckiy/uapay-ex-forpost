import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  dictionaryForm: FormGroup;
  submitted = false;

  public currentID;
  public currentLang;
  public currentName;
  public currentNameLang;

  public setDictionary = (id, name, lang, namelang) => {
    this.currentID = id ? id : null;
    this.currentLang = lang ? lang : null;
    this.currentName = name ? name : null;
    this.currentNameLang = namelang ? namelang : null;
  }

  modalCmp = ModalExampleModalComponent;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  keys = [];
  keysList = [];
  langs = [];
  countries = [];
  countryCode = '';
  lang = '';
  name = '';
  namelang = '';
  page = 1;
  totalItems = 0;
  sort = 'id';
  order = 'asc';
  sortOrder = 'id';
  sortOrderStored = 'id';
  itemsPerPage = 20;

  loadTotal(name: string, lang: string, namelang: string) {
    this.http.get(`/api/dictionary/?lang_like=${this.lang}&name_like=${this.name}&namelang_like=${this.namelang}`).subscribe((x:any) => {
      this.totalItems = x.length;
    });
  }
  loadLang() {
    this.http.get('/api/dictionary').subscribe((x:any) => {
      this.langs = x.reduce(function(a, c) {
        if (!a.find(y => y === c.lang) && c.lang !== null && c.lang !== '') {
          a.push(c.lang);
        }
        return a;
      }, []).sort();
    });
  }
  loadKeys() {
    this.http.get('/api/dictionary').subscribe((x:any) => {
      this.keysList = x.reduce(function(a, c) {
        if (!a.find(y => y === c.name) && c.name !== null && c.name !== '') {
          a.push(c.name);
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
  loadPage(page: number, itemsPerPage: number, name: string, lang: string, namelang: string, sort: string, order: string) {
    // FIXME
    page = typeof page !== 'number' ? this.page : page;
    //
    this.http.get(`/api/dictionary/?_page=${page}&_limit=${this.itemsPerPage}&lang_like=${this.lang}&name_like=${this.name}&namelang_like=${this.namelang}&_sort=${this.sort}&_order=${this.order}`).subscribe((x:any) => {
      this.keys = x;
      console.log(`/api/dictionary/?_page=${page}&_limit=${this.itemsPerPage}&lang_like=${this.lang}&name_like=${this.name}&namelang_like=${this.namelang}&_sort=${this.sort}&_order=${this.order}`);
    });
  }

  ngOnInit() {
    this.loadTotal(this.lang, this.name, this.namelang);
    this.loadLang();
    this.loadKeys();
    this.loadCountry();
    this.loadPage(this.page, this.itemsPerPage, this.lang, this.name, this.namelang, this.sort, this.order);
    this.dictionaryForm = this.formBuilder.group({
      modalName: ['', Validators.required],
      modalNameLang: ['', Validators.required]/*,
      modalPoints: ['', Validators.required],
      modalQuantity: ['', Validators.required],
      modalActive: ['', Validators.required]*/
    });
  }

  get f() { return this.dictionaryForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.dictionaryForm.invalid) {
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
