import {Component, Input, OnInit} from '@angular/core';

/**
 * home sub header menu
 */
export interface SubHeaderMenu {
  route: string | string[];
  label: string;
}

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  // header child menu
  @Input() menu: SubHeaderMenu[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
