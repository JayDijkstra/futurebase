import { Component } from '@angular/core';
import { Platform  } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { SignalPage } from '../pages/signals/signals';
import template from './app.html';

@Component({
  template
})

export class FutureBase {
  rootPage = SignalPage;
  constructor(platform: Platform){
    platform.ready().then(() => {
      if(platform.is('cordova')){

      }
    })
  }
}
