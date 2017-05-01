import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Signals, Images } from '../../../../imports/collections';
import { Signal, MessageType } from '../../../../imports/models';
import { ImagesPage } from '../images/images';

import template from './signals.html';

@Component({
  template
})

export class SignalPage implements OnInit{
  signals;


  constructor(private navCtrl: NavController){
  }

  ngOnInit() {
    this.signals = Signals
      .find({})
      .mergeMap((signals: Signal[]) =>
        Observable.combineLatest(
          ...signals.map((signal: Signal) =>
            Images
              .find({signalid: signal._id})
              .startWith(null)
              .map(images => {
                if (images) signal.lastMessage = images[0];
                return signal;
              })
          )
        )
      ).zone();
  }
  showSignals(signal): void {
    this.navCtrl.push(ImagesPage, {signal});
  }

  removeSignal(signal: Signal): void {
    Signals.remove({_id: signal._id}).subscribe(() => {});
  }
}
