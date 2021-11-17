import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './components/common/header/header.module';
import {HttpClientModule} from '@angular/common/http';
import {MainContentModule} from './components/common/main-content/main-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    MainContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
