import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../../environments/environment';

const {
  baseUrl,
} = environment;

@Component({
  selector: 'app-kids-run-challenge-top-description',
  templateUrl: './kids-run-challenge-top-description.component.html',
  styleUrls: ['./kids-run-challenge-top-description.component.scss']
})
export class KidsRunChallengeTopDescriptionComponent implements OnInit {
  // logo url
  logoUrl = baseUrl + '/assets/images/logos/kids-run-challenge-logo.png';

  // thumbnails
  thumbnails = [
    baseUrl + '/assets/images/kids-run-challenge/top-1.png',
    baseUrl + '/assets/images/kids-run-challenge/top-2.png',
    baseUrl + '/assets/images/kids-run-challenge/top-3.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
