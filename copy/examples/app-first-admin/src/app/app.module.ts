import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfirmAlertModule } from '@uxdf/p-components';
import { NgbAlertModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroupModule, ModalModule } from '@uxdf/p-components';
import { GiftsComponent } from './gifts/gifts.component';
import { UsersComponent } from './users/users.component';
import { KeyComponent } from './key/key.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordcustomComponent } from './wordcustom/wordcustom.component';
import { KeytextComponent } from './keytext/keytext.component';
import { TextsComponent } from './texts/texts.component';
import { TextcustomComponent } from './textcustom/textcustom.component';
import { AppPageLayoutModule } from './app-page-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GiftsComponent,
    UsersComponent,
    KeyComponent,
    DictionaryComponent,
    WordcustomComponent,
    KeytextComponent,
    TextsComponent,
    TextcustomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbDropdownModule.forRoot(),
    NgbPaginationModule.forRoot(),
    ConfirmAlertModule,
    NgbAlertModule.forRoot(),
    FormsModule,
    FormGroupModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppPageLayoutModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
