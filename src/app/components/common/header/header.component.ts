import {Component, HostListener, OnInit} from '@angular/core';
import {HeaderMenu} from './header-menu/header-menu.component';
import {NavigationEnd, Router} from '@angular/router';
import {ParsingUtil} from '@tk-ui/utils/parsing.util';
import {SubscriptionService} from '@tk-ui/services/common/subscription.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    SubscriptionService,
  ],
})
export class HeaderComponent implements OnInit {
  // url path prefix for each section
  // zalkeum
  readonly zalkeumPath = 'zalkeum';
  // zalkeum center
  readonly zalkeumCenterPath = 'zalkeum-center';
  // kids run
  readonly kidsRunPath = 'kids-run';

  // home menu
  menu: HeaderMenu[] = [
    {
      route: ['home'],
      fragment: 'zalkeum',
      label: '잘큼',
      hoverImage: '/images/logos/zalkeum-logo.png',
      backgroundColor: 'midnight-express',
      children: [
        {
          route: [],
          label: '사명/가치',
        },
        {
          route: [],
          label: '사업 개관',
        },
        {
          route: [],
          label: '잘큼 연혁'
        },
        {
          route: [],
          label: 'IP & Tech',
        },
        {
          route: [],
          label: '브랜드',
        },
        {
          route: [],
          label: 'What is 잘큼?',
        },
      ],
    },
    {
      route: ['home'],
      fragment: 'zalkeum-center',
      label: '잘큼센터',
      hoverImage: '/images/logos/zalkeum-center-logo.png',
      backgroundColor: 'coffee',
      children: [
        {
          route: [],
          label: '잘큼센터란?',
        },
        {
          route: [],
          label: 'Class',
        },
        {
          route: [],
          label: 'Play',
        },
        {
          route: [],
          label: '학교',
        },
        {
          route: [],
          label: '잘큼스쿨',
        },
      ],
    },
    {
      route: ['home'],
      fragment: 'kids-run',
      label: '키즈런',
      hoverImage: '/images/logos/kids-run-logo.png',
      backgroundColor: 'midnight-blue',
      children: [
        {
          route: [this.kidsRunPath, 'play'],
          label: '플레이',
        },
        {
          route: [this.kidsRunPath, 'experience'],
          label: '체험',
        },
        {
          route: [this.kidsRunPath, 'edu'],
          label: '에듀',
        },
        {
          route: [this.kidsRunPath, 'care'],
          label: '케어',
        },
        {
          route: [this.kidsRunPath, 'others'],
          label: '기타',
        },
      ],
    },
  ];

  // hovered menu
  hoveredMenu?: HeaderMenu;

  // header menu which has opened child
  private _childOpenedMenu?: HeaderMenu;

  // child opened state
  // check current url with readonly path prefixes
  private _childOpened = false;

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit(): void {
    this._subscribeRouterEvent();
  }

  /**
   * return prefixes
   * should follow the order of navigation
   */
  get prefixes(): string[] {
    return [
      this.zalkeumPath,
      this.zalkeumCenterPath,
      this.kidsRunPath,
    ];
  }

  /**
   * subscribe router event
   */
  private _subscribeRouterEvent(): void {
    const sub = this.router.events
      .subscribe({
        next: res => {
          if (res instanceof NavigationEnd) {
            this._checkCurrentUrl();
          }
        }
      });

    this.subscriptionService.store('_subscribeRouterEvent', sub);
  }

  /**
   * check current url for detecting child route opened
   */
  private _checkCurrentUrl(): void {
    const parsedUrl = ParsingUtil.parssPathUrl(this.router.url);
    const index = this.prefixes.indexOf(parsedUrl.paths[0]);

    if (index !== -1) {
      this._childOpened = true;
      this._childOpenedMenu = this.menu[index];
      this.setHoveredMenu(this.menu[index]);
    } else {
      this._childOpened = false;
    }
  }

  /**
   * set hovered menu
   * @param menu hovered menu
   */
  setHoveredMenu(menu: HeaderMenu): void {
    this.hoveredMenu = menu;
  }

  /**
   * listener for mouseleave of host
   */
  @HostListener('mouseleave')
  onHostMouseLeave(): void {
    if (this._childOpened) {
      this._restoreChildOpenedMenu();
    } else {
      this._removeHoveredMenu();
    }
  }

  /**
   * remove hovered menu
   */
  private _removeHoveredMenu(): void {
    this.hoveredMenu = undefined;
  }

  /**
   * restore child opened menu
   */
  private _restoreChildOpenedMenu(): void {
    this.hoveredMenu = this._childOpenedMenu;
  }
}
