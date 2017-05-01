import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';
import { Signals, Images } from '../imports/collections';
import { MessageType } from '../imports/models';

Meteor.startup(() => {
  if(Signals.find({}).cursor.count() === 0){
    let signalId;

    signalId = Signals.collection.insert({
      title: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    });

    Images.collection.insert({
      signalId: signalId,
      content: 'You on your way?',
      createdAt: Moment().subtract(1, 'hours').toDate(),
      type: MessageType.TEXT
    });

    Images.collection.insert({
      signalId: signalId,
      content: 'You on your way?',
      createdAt: Moment().subtract(1, 'hours').toDate(),
      type: MessageType.TEXT
    });

    Images.collection.insert({
      signalId: signalId,
      content: 'You on your way?',
      createdAt: Moment().subtract(1, 'hours').toDate(),
      type: MessageType.TEXT
    });

  }
})
