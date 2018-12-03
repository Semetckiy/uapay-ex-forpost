import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  giftForm: FormGroup;
  submitted = false;

  public currentID;
  public currentImage;
  public currentDescription;
  public currentText;
  public currentCategory;
  public currentData;
  public currentRegion;
  public currentCountry;
  public currentPoints;
  public currentQuantity;
  public currentStatus;
  public currentPriority;
  public currentLink;
  public currentCode;

  giftDataArray: {[key:string]: any} = {};
  giftDataPairs = [];

  public setGift = (id, description, category, data, country, points, quantity, status, priority) => {
    this.currentID = id ? id : null;
    this.currentImage = id ? 'https://www.amadeusfirst.com/admin/images/inc/firstGifts/' + this.currentID + '.jpg' : null;
    this.currentDescription = description ? description : null;
    this.currentCategory = category ? category : null;
    this.currentData = data ? data : null;

    if (data) {
      this.giftDataPairs = this.currentData.split('^');
      for (let i in this.giftDataPairs) {
        let split = this.giftDataPairs[i].split('=');
        this.giftDataArray[split.shift()] = split.join('=');
      }
    }
    this.currentRegion = this.giftDataArray.region && id ? parseInt(this.giftDataArray.region) : null;
    this.currentText = this.giftDataArray.text && id ? this.giftDataArray.text.replace(/<[^>]*>/g, '') : null;
    this.currentLink = this.giftDataArray.link && id ? this.giftDataArray.link : null;
    this.currentCode = this.giftDataArray.ExternalGiftCode && id ? this.giftDataArray.ExternalGiftCode : null;

    this.currentCountry = country ? country : null;
    this.currentPoints = points ? points : null;
    this.currentQuantity = quantity && id ? quantity : null;
    this.currentStatus = status && id ? status : null;
    this.currentPriority = priority ? priority : null;
  }

  modalCmp = ModalExampleModalComponent;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  gifts = [];
  regions = [];
  countries = [];
  categories = [];
  // FIX needed: active page of paginator if page set other than "1", works fine if [collectionSize]="390" instead of [collectionSize]="totalItems"
  page = 1;
  totalItems = 0;
  description = '';
  sort = 'id';
  order = 'asc';
  category = '';
  sortOrder = 'id';
  sortOrderStored = 'id';
  countryCode = '';
  active = '';
  itemsPerPage = 20;

  loadTotal(description: string, countryCode: string, category: string, active: string) {
    this.http.get(`/api/gifts/?description_like=${this.description}&countryCode_like=${this.countryCode}&category_like=${this.category}&active_like=${this.active}`).subscribe((x:any) => {
      this.totalItems = x.length;
    });
  }
  loadRegion() {
    this.http.get('/api/regions').subscribe((x:any) => {
      this.regions = x.sort((y, z) => y.name >= z.name ? 1 : -1).reduce(function(a, c) {
        a[c.name] = c.id;
        return a;
      }, []);
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
  loadCategory() {
    this.http.get('/api/gifts').subscribe((x:any) => {
      this.categories = x.reduce(function(a, c) {
        if (!a.find(y => y === c.category)) {
          a.push(c.category);
        }
        return a;
      }, []).sort();
    });
  }
  changeOrder(sortOrder) {
    if (sortOrder === this.sortOrderStored) this.order = this.order === 'asc' ? 'desc' : 'asc'; 
    this.sortOrderStored = sortOrder;
  }
  loadPage(page: number, itemsPerPage: number, description: string, countryCode: string, category: string, active: string, sort: string, order: string) {
    // FIXME
    page = typeof page !== 'number' ? this.page : page;
    //
    this.http.get(`/api/gifts/?_page=${page}&_limit=${this.itemsPerPage}&description_like=${this.description}&countryCode_like=${this.countryCode}&category_like=${this.category}&active_like=${this.active}&_sort=${this.sort}&_order=${this.order}`).subscribe((x:any) => {
      this.gifts = x;
      console.log(`/api/gifts/?_page=${page}&_limit=${this.itemsPerPage}&description_like=${this.description}&countryCode_like=${this.countryCode}&category_like=${this.category}&active_like=${this.active}&_sort=${this.sort}&_order=${this.order}`);
    });
  }

  ngOnInit() {
    this.loadTotal(this.description, this.countryCode, this.category, this.active);
    this.loadRegion();
    this.loadCountry();
    this.loadCategory();
    this.loadPage(this.page, this.itemsPerPage, this.description, this.countryCode, this.category, this.active, this.sort, this.order);
    this.giftForm = this.formBuilder.group({
      modalName: ['', Validators.required]/*,
      modalPoints: ['', Validators.required],
      modalQuantity: ['', Validators.required],
      modalActive: ['', Validators.required]*/
    });
  }

  get f() { return this.giftForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.giftForm.invalid) {
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
