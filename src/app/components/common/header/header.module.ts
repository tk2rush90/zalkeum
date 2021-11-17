import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { SubHeaderMenuComponent } from './sub-header-menu/sub-header-menu.component';
import {IconModule} from '@tk-ui/components/icon/icon.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    HeaderMenuComponent,
    HeaderHomeComponent,
    SubHeaderMenuComponent,
    MainHeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule
  ]
})
export class HeaderModule { }
