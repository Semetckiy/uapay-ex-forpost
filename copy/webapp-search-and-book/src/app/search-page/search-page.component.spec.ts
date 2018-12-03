// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { SearchPageComponent } from './search-page.component';
// import {SearchModule} from "../search/search.module";
// import {FormEffects} from "../search/effects/form.effects";
// import {ReactiveFormsModule} from "@angular/forms";
// import * as fromFeature from "../search/reducers";
// import {FormGroupModule} from "@uxdf/p-components";
// import {ResultsEffects} from "../search/effects/results.effects";
// import {Store, StoreModule} from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
//
// describe('SearchPageComponent', () => {
//   let component: SearchPageComponent;
//   let fixture: ComponentFixture<SearchPageComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [SearchModule, StoreModule.forFeature('search', fromFeature.reducers),
//         EffectsModule.forFeature([FormEffects, ResultsEffects]),
//         FormGroupModule, ReactiveFormsModule,],
//       declarations: [ SearchPageComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
