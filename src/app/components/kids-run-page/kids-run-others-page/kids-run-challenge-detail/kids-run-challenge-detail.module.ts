import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRunChallengeDetailComponent } from './kids-run-challenge-detail.component';
import { KidsRunChallengeTopDescriptionComponent } from './kids-run-challenge-top-description/kids-run-challenge-top-description.component';
import { KidsRunChallengeInfoDetailComponent } from './kids-run-challenge-info-detail/kids-run-challenge-info-detail.component';
import {InfoListItemModule} from '../../../common/info-list-item/info-list-item.module';
import { KidsRunChallengeThumbnailsComponent } from './kids-run-challenge-thumbnails/kids-run-challenge-thumbnails.component';
import {InlineImageViewerModule} from '../../../common/inline-image-viewer/inline-image-viewer.module';



@NgModule({
  declarations: [
    KidsRunChallengeDetailComponent,
    KidsRunChallengeTopDescriptionComponent,
    KidsRunChallengeInfoDetailComponent,
    KidsRunChallengeThumbnailsComponent
  ],
  exports: [
    KidsRunChallengeDetailComponent
  ],
  imports: [
    CommonModule,
    InfoListItemModule,
    InlineImageViewerModule
  ]
})
export class KidsRunChallengeDetailModule { }
