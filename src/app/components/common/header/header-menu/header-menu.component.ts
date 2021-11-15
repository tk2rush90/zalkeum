import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../../../services/header.service';
import {SubscriptionService} from '@tk-ui/services/common/subscription.service';

export type HeaderMenuBackgroundColor = 'midnight-express' | 'coffee' | 'midnight-blue';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  providers: [
    SubscriptionService,
  ],
})
export class HeaderMenuComponent implements OnInit {
  // menu label
  @Input() label = '';

  // header highlight background color
  // bind to 'background-color' attribute
  @Input() @HostBinding('attr.background-color') backgroundColor: HeaderMenuBackgroundColor = 'midnight-express';

  // hover image base64 url
  hoverImageBase64 = '';

  // hover image url
  private _hoverImage = '';

  constructor(
    private headerService: HeaderService,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * set hover image
   * @param hoverImage
   */
  @Input() set hoverImage(hoverImage: string) {
    this._hoverImage = hoverImage;
    this._getHoverImageAsBase64();
  }

  /**
   * get hover image as base64 url
   */
  private _getHoverImageAsBase64(): void {
    if (this._hoverImage) {
      const sub = this.headerService.getImageAsBase64(this._hoverImage)
        .subscribe({
          next: res => {
            this.hoverImageBase64 = res;
          },
        });

      this.subscriptionService.store('_getHoverImageAsBase64', sub);
    }
  }
}
