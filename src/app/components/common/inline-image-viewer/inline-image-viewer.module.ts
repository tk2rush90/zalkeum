import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineImageViewerComponent } from './inline-image-viewer.component';
import {ImageRatioContainerModule} from '../image-ratio-container/image-ratio-container.module';



@NgModule({
  declarations: [
    InlineImageViewerComponent
  ],
  exports: [
    InlineImageViewerComponent
  ],
  imports: [
    CommonModule,
    ImageRatioContainerModule
  ]
})
export class InlineImageViewerModule { }
