import { Component, OnInit } from '@angular/core';
import {InfoListItem} from '../../../../common/info-list-item/info-list-item.component';

@Component({
  selector: 'app-kids-run-challenge-info-detail',
  templateUrl: './kids-run-challenge-info-detail.component.html',
  styleUrls: ['./kids-run-challenge-info-detail.component.scss']
})
export class KidsRunChallengeInfoDetailComponent implements OnInit {
  // data
  list: InfoListItem[][] = [
    [
      {
        color: 'primary',
        title: '참가비',
        descriptions: [
          '61,000원 / 1KIT + 온라인 비대면 놀이 1회',
          '29,000원 / 온라인 비대면 놀이 1회'
        ],
      },
      {
        color: 'primary',
        title: '성장 포인트',
        descriptions: [
          '도전의식, 적극성, 주체성',
        ],
      },
    ],
    [
      {
        color: 'secondary',
        title: '특장점',
        descriptions: [
          '아이들 취향저격, 재미보장',
          '치우치지 않은 체,덕,지 미션으로 건강하게!',
          '언제, 어디서나, 온라인 및 오프라인 모두 참여 가능.',
          '정기적으로 참여 가능한 실시간 온라인 비대면 놀이 포함 (온라인 참여권 별도 구매 필요)',
          '가이드 영상으로 아이가 스스로! 부모님의 자유시간까지!',
        ],
      },
    ],
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
