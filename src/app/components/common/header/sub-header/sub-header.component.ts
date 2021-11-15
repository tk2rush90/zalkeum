import {Component, Input, OnInit} from '@angular/core';
import {HeaderChildMenu} from '../header.component';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  // header child menu
  @Input() menu: HeaderChildMenu[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
