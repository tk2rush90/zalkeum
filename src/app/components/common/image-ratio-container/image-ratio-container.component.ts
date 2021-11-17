import {Component, Input, OnInit} from '@angular/core';

/**
 * ratio image interface
 */
export interface RatioImage {
  ratio: number;
  alt: string;
  src: string;
}

@Component({
  selector: 'app-image-ratio-container',
  templateUrl: './image-ratio-container.component.html',
  styleUrls: ['./image-ratio-container.component.scss']
})
export class ImageRatioContainerComponent implements OnInit {
  // data
  @Input() data!: RatioImage;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * return padding top for image wrapper
   */
  get paddingTop(): string {
    return this.data.ratio + '%';
  }
}
