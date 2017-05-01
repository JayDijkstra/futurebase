import { MongoObservable } from 'meteor-rxjs';
import { Image } from '../models';

export const Images = new MongoObservable.Collection<Image>('messages');
