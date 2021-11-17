import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../../../services/header.service';
import {SubscriptionService} from '@tk-ui/services/common/subscription.service';
import {SubHeaderMenu} from '../sub-header/sub-header.component';

// header background colors
export type HeaderMenuBackgroundColor = 'midnight-express' | 'coffee' | 'midnight-blue';

/**
 * home menu model
 */
export interface HeaderMenu {
  route: string | string[];
  fragment: string;
  label: string;
  hoverImage: string;
  backgroundColor: HeaderMenuBackgroundColor;
  children: SubHeaderMenu[];
}

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  providers: [
    SubscriptionService,
  ],
})
export class HeaderMenuComponent implements OnInit {
  // hovered state
  @Input() @HostBinding('class.zk-active') hovered = false;

  // hover image base64 url
  hoverImageBase64 = '';

  // header menu
  private _menu?: HeaderMenu;

  constructor(
    private headerService: HeaderService,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * set header menu
   * @param menu menu
   */
  @Input() set menu(menu: HeaderMenu | undefined) {
    this._menu = menu;
    this._getHoverImageAsBase64();
  }

  /**
   * header highlight background color
   * bind to 'zk-background-color' attribute
   */
  @HostBinding('attr.zk-background-color') get backgroundColor(): HeaderMenuBackgroundColor | undefined {
    return this.menu?.backgroundColor;
  }

  /**
   * return header menu
   */
  get menu(): HeaderMenu | undefined {
    return this._menu;
  }

  /**
   * return hover image
   */
  get hoverImage(): string | undefined {
    return this._menu?.hoverImage;
  }

  /**
   * get hover image as base64 url
   */
  private _getHoverImageAsBase64(): void {
    if (this.hoverImage) {
      const sub = this.headerService.getImageAsBase64(this.hoverImage)
        .subscribe({
          next: res => {
            this.hoverImageBase64 = res;
          },
        });

      this.subscriptionService.store('_getHoverImageAsBase64', sub);
    }
  }
}
