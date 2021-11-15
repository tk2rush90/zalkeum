import { Component, OnInit } from '@angular/core';
import {HeaderMenuBackgroundColor} from './header-menu/header-menu.component';

/**
 * home menu model
 */
export interface HeaderMenu {
  route: string | string[];
  label: string;
  hoverImage: string;
  backgroundColor: HeaderMenuBackgroundColor;
  children: HeaderChildMenu[];
}

/**
 * home child menu
 */
export interface HeaderChildMenu {
  route: string | string[];
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // home menu
  menu: HeaderMenu[] = [
    {
      route: [],
      label: '잘큼',
      hoverImage: '/assets/images/zalkeum-logo.png',
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
      route: [],
      label: '잘큼센터',
      hoverImage: '/assets/images/zalkeum-center-logo.png',
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
      route: [],
      label: '키즈런',
      hoverImage: '/assets/images/kids-run-logo.png',
      backgroundColor: 'midnight-blue',
      children: [
        {
          route: [],
          label: '플레이',
        },
        {
          route: [],
          label: '체험',
        },
        {
          route: [],
          label: '에듀',
        },
        {
          route: [],
          label: '케어',
        },
        {
          route: [],
          label: '기타',
        },
      ],
    },
  ];

  // hovered menu
  hoveredMenu?: HeaderMenu;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * set hovered menu
   * @param menu hovered menu
   */
  setHoveredMenu(menu: HeaderMenu): void {
    this.hoveredMenu = menu;
  }
}
