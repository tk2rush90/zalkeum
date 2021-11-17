import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {
  // carousel images
  carouselImages: string[] = [
    '/assets/images/main-slider-1.png',
    '/assets/images/main-slider-2.png',
    '/assets/images/main-slider-3.png',
    '/assets/images/main-slider-4.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
