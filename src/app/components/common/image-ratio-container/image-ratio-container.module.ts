import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageRatioContainerComponent } from './image-ratio-container.component';



@NgModule({
  declarations: [
    ImageRatioContainerComponent
  ],
  exports: [
    ImageRatioContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageRatioContainerModule { }
