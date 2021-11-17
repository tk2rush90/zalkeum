import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRunOthersPageComponent } from './kids-run-others-page.component';
import {TabButtonsModule} from '../../../components/common/tab-buttons/tab-buttons.module';
import {KidsRunChallengeDetailModule} from '../../../components/kids-run-page/kids-run-others-page/kids-run-challenge-detail/kids-run-challenge-detail.module';



@NgModule({
  declarations: [
    KidsRunOthersPageComponent
  ],
  imports: [
    CommonModule,
    TabButtonsModule,
    KidsRunChallengeDetailModule
  ]
})
export class KidsRunOthersPageModule { }
