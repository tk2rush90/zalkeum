import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBannerComponent } from './carousel-banner.component';
import {CarouselModule} from '@tk-ui/components/carousel/carousel.module';



@NgModule({
  declarations: [
    CarouselBannerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class CarouselBannerModule { }
