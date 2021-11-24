import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DatePipe} from "@angular/common";
import {MetinModule} from "../modules/metin.module";
import {MiniButtonsComponent} from "./buttons/mini-buttons/mini-buttons.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetinModule
  ],
  providers: [DatePipe],
  exports: [
    MiniButtonsComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
