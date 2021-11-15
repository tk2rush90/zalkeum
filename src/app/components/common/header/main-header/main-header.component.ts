import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeaderMenu} from '../header.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  // header menu
  @Input() menu: HeaderMenu[] = [];

  // emitter for menu hover
  @Output() hoverOnMenu: EventEmitter<HeaderMenu> = new EventEmitter<HeaderMenu>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emit hover on menu with menu
   * @param menu menu
   */
  emitHoverOnMenu(menu: HeaderMenu): void {
    this.hoverOnMenu.emit(menu);
  }
}
