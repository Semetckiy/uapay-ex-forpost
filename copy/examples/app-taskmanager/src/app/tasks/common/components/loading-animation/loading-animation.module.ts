import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingAnimationComponent } from "./loading-animation.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingAnimationComponent],
  exports: [LoadingAnimationComponent]
})
export class LoadingAnimationModule { }
