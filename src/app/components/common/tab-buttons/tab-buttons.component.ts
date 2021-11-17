import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FlatButtonColor} from '@tk-ui/components/flat-button/flat-button.directive';

/**
 * tab button
 */
export class TabButton {
  key: string;
  label: string;

  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }

  /**
   * get button color by key
   * @param key key
   */
  getColor(key: string): FlatButtonColor {
    return this.key === key ? 'midnight-blue' : 'periwinkle';
  }
}

@Component({
  selector: 'app-tab-buttons',
  templateUrl: './tab-buttons.component.html',
  styleUrls: ['./tab-buttons.component.scss']
})
export class TabButtonsComponent implements OnInit {
  // current tab
  @Input() tab = '';

  // tab buttons
  @Input() tabButtons: TabButton[] = [];

  // tab change emitter
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emit tab change when tab changed
   * @param tab clicked tab key
   */
  emitTabChange(tab: string): void {
    if (tab !== this.tab) {
      this.tabChange.emit(tab);
    }
  }
}
