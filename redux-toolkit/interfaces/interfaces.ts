import { PostChatPayload } from "@/interface/chatapi.interface";
import { userData } from "@/types/common.type";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: userData | null;
  token : null | string
}

export interface IPendingMessageQueueItem extends PostChatPayload {
  timestamp: number;
  sending: boolean;
  error?: boolean;
  isRetrying?: boolean;
  chatId: string;
}
export interface IchatSlice {
  activeChatID: string;
  pendingMessageQueue: {
    [key: string]: IPendingMessageQueueItem[];
  };
  typingStatus: {
    [key: string]: string;
  };
}

export interface registrationData {}

export type themeType =
  | "light-mode"
  | "dark-mode"

export interface globalStateInterface {
  counter: number;
  theme: themeType;
}
