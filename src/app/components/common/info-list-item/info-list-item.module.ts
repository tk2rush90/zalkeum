import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListItemComponent } from './info-list-item.component';



@NgModule({
  declarations: [
    InfoListItemComponent
  ],
  exports: [
    InfoListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoListItemModule { }
