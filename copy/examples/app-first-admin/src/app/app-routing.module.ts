import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { GiftsComponent } from "./gifts/gifts.component";
import { UsersComponent } from "./users/users.component";
import { KeyComponent } from "./key/key.component";
import { DictionaryComponent } from "./dictionary/dictionary.component";
import { WordcustomComponent } from "./wordcustom/wordcustom.component";
import { KeytextComponent } from "./keytext/keytext.component";
import { TextsComponent } from "./texts/texts.component";
import { TextcustomComponent } from "./textcustom/textcustom.component";

const ROUTES = [
  { path: 'gifts', component: GiftsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'key', component: KeyComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'wordcustom', component: WordcustomComponent },
  { path: 'keytext', component: KeytextComponent },
  { path: 'texts', component: TextsComponent },
  { path: 'textcustom', component: TextcustomComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
