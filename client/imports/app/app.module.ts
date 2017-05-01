import { NgModule, ErrorHandler } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { SignalPage } from '../pages/signals/signals';
import { FutureBase } from './app.component';

@NgModule({
  declarations: [
    FutureBase,
    HomePage,
    SignalPage
  ],
  imports: [
    IonicModule.forRoot(FutureBase),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FutureBase,
    HomePage,
    SignalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
