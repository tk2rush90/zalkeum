import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';



@NgModule({
  declarations: [
    MainContentComponent
  ],
  exports: [
    MainContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainContentModule { }
