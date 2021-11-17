import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonsComponent } from './tab-buttons.component';
import {FlatButtonModule} from '@tk-ui/components/flat-button/flat-button.module';



@NgModule({
  declarations: [
    TabButtonsComponent
  ],
  exports: [
    TabButtonsComponent
  ],
  imports: [
    CommonModule,
    FlatButtonModule
  ]
})
export class TabButtonsModule { }
