import { IchatDetails, PostChatPayload } from "@/interface/chatapi.interface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export interface AccountUser {
  entityType: string;
  id: string;
}

export interface IChatBarListItem {
  id: string;
  entityType: string;
  creationDate: number;
  lastModifiedDate: number;
  lastModifiedUser: string;
  isDeleted: boolean;
  accountUser: AccountUser;
  title: string;
}

export type IChatBarList = IChatBarListItem[];

export const chatBarList = async () => {
  return axiosInstance.get<IChatBarListItem[]>(endpoints.chat.chatList);
};

export const getChatDetails = async (id: string) => {
  return axiosInstance.get<IchatDetails>(endpoints.chat.details(id));
};

export interface IdeleteChatPayload {
  isDeleted: boolean;
}
export const deleteChatt = async (id: string, data: IdeleteChatPayload) => {
  return axiosInstance.post(endpoints.chat.details(id), data);
};

export const submitChatMessage = async (data: PostChatPayload) => {
  return axiosInstance.post<IchatDetails>(
    endpoints.chat.postMessage(data?.id),
    data
  );
};

export const submitChatFile = async (data: PostChatPayload) => {
  
  

  return axiosInstance.post<IchatDetails>(
    endpoints.chat.postFile(data?.id),
    data
  );
};

export const createNewChatMutation = async (data) => {
  return axiosInstance.post(endpoints.chat.newchat, data);
};
