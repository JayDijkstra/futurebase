import { Component } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Signal, MessageType } from '../../../../imports/models';
import template from './signals.html';

@Component({
  template
})

export class SignalPage {
  signals: Observable<Signal[]>;

  constructor(){
    this.signals = this.findSignals();
  }

  private findSignals(): Observable<Signal[]> {
    return Observable.of([
      {
        _id: '0',
        title: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: Moment().subtract(1, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '1',
        title: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: Moment().subtract(2, 'hours').toDate(),
          type: MessageType.TEXT
        }
      },
      {
        _id: '2',
        title: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: Moment().subtract(1, 'days').toDate(),
          type: MessageType.TEXT
        }
      }
    ]);
  }
}
