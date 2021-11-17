import {Component, Input, OnInit} from '@angular/core';
import {RatioImage} from '../image-ratio-container/image-ratio-container.component';

@Component({
  selector: 'app-inline-image-viewer',
  templateUrl: './inline-image-viewer.component.html',
  styleUrls: ['./inline-image-viewer.component.scss']
})
export class InlineImageViewerComponent implements OnInit {
  // ratio images
  ratioImages: RatioImage[] = [];

  // image urls in array
  private _images: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * set image urls in array
   * @param images images
   */
  @Input() set images(images: string[]) {
    this._images = images;
    this._createRatioImages();
  }

  /**
   * create ratio images
   */
  private _createRatioImages(): void {
    this.ratioImages = this._images.map(image => {
      return {
        alt: image,
        src: image,
        ratio: (282.87 / 350) * 100,
      };
    });
  }
}
