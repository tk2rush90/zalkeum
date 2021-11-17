import {Component, Input, OnInit} from '@angular/core';

// list item color
export type InfoListItemColor = 'primary' | 'secondary';

/**
 * info list item
 */
export interface InfoListItem {
  color: InfoListItemColor;
  title: string;
  descriptions: string | string[];
}

@Component({
  selector: 'app-info-list-item',
  templateUrl: './info-list-item.component.html',
  styleUrls: ['./info-list-item.component.scss']
})
export class InfoListItemComponent implements OnInit {
  // info list item data
  @Input() data!: InfoListItem;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * return `true` when description are multi line
   */
  get multiLine(): boolean {
    return this.data.descriptions instanceof Array;
  }

  /**
   * return descriptions as array
   */
  get descriptions(): string[] {
    return this.data.descriptions as string[];
  }

  /**
   * return description as string
   */
  get description(): string {
    return this.data.descriptions as string;
  }
}
