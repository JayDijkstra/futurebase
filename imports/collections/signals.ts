import { MongoObservable } from 'meteor-rxjs';
import { Signal } from '../models';

export const Signals = new MongoObservable.Collection<Signal>('signals');
