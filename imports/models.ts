export enum MessageType {
  TEXT = <any>'text'
}

export interface Signal {
  _id?: string;
  title?: string;
  picture?: string;
  lastMessage?: Image;
}

export interface Image {
  _id?: string;
  signalId?: string;
  content?: string;
  createdAt?: Date;
  ownership? : string;
  type?: MessageType
}
