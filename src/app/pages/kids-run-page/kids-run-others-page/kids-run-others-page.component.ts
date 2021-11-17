import { Component, OnInit } from '@angular/core';
import {TabButton} from '../../../components/common/tab-buttons/tab-buttons.component';

@Component({
  selector: 'app-kids-run-others-page',
  templateUrl: './kids-run-others-page.component.html',
  styleUrls: ['./kids-run-others-page.component.scss']
})
export class KidsRunOthersPageComponent implements OnInit {
  // current tab
  tab = 'b2b-business';

  // tab buttons
  tabButtons: TabButton[] = [
    new TabButton('b2b-business', 'B2B 사업'),
    new TabButton('on-tact', 'ON-TACT'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
