import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-run-challenge-top-description',
  templateUrl: './kids-run-challenge-top-description.component.html',
  styleUrls: ['./kids-run-challenge-top-description.component.scss']
})
export class KidsRunChallengeTopDescriptionComponent implements OnInit {
  // thumbnails
  thumbnails = [
    '/assets/images/kids-run-challenge/top-1.png',
    '/assets/images/kids-run-challenge/top-2.png',
    '/assets/images/kids-run-challenge/top-3.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
