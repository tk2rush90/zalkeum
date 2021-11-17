import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRunPageRoutingModule } from './kids-run-page-routing.module';
import { KidsRunPageComponent } from './kids-run-page.component';
import {KidsRunOthersPageModule} from './kids-run-others-page/kids-run-others-page.module';


@NgModule({
  declarations: [
    KidsRunPageComponent
  ],
  imports: [
    CommonModule,
    KidsRunPageRoutingModule,
    KidsRunOthersPageModule,
  ]
})
export class KidsRunPageModule { }
