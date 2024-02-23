import { IAccountUser, IModel } from "./apiresponse.interface";

export interface IMessage {
  fromUser: string;
  content: string;
  date: string;
}
export interface PostChatPayload {
  id: string;
  message: string;
  file?: File;
}

export interface IchatDetails {
  id: string;
  entityType: string;
  creationDate: number;
  lastModifiedDate: number;
  lastModifiedUser: string;
  isDeleted: boolean;
  accountUser: IAccountUser;
  messages: IMessage[];
  participants: IModel[];
  lastMessageDate: number;
  title: string;
  accountModel: IModel
}
