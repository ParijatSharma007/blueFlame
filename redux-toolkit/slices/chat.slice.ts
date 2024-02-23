import { createSlice } from "@reduxjs/toolkit";
import { IPendingMessageQueueItem, IchatSlice } from "../interfaces/interfaces";

const initialState: IchatSlice = {
  activeChatID: "",
  pendingMessageQueue: {},
  typingStatus: {}
};

export const chatSlice = createSlice({
  name: "chatSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveChatID: (state, { payload }: { payload: string }) => {
      state.activeChatID = payload;
    },
    enqueuePendingMessageQueue: (
      state,
      { payload }: { payload: IPendingMessageQueueItem }
    ) => {
      //
      const temp = state.pendingMessageQueue[payload?.chatId] || [];

      // find if the msg exist by timestamp
      const findIndex = temp.findIndex(
        (item) => item.timestamp === payload.timestamp
      );

      if (findIndex >= 0) {
        temp[findIndex] = payload;
      } else {
        temp.push(payload);
      }

      state.pendingMessageQueue = {
        ...state.pendingMessageQueue,
        [payload?.chatId]: temp
      };
    },
    dequeuePendingMessageQueue: (
      state,
      { payload }: { payload: IPendingMessageQueueItem }
    ) => {
      //
      const temp = state.pendingMessageQueue[payload?.chatId] || [];

      // find if the msg exist by timestamp
      const findIndex = temp.findIndex(
        (item) => item.timestamp === payload.timestamp
      );

      temp.splice(findIndex, 1);

      state.pendingMessageQueue = {
        ...state.pendingMessageQueue,
        [payload?.chatId]: temp
      };
    },
    enqueueTypingStatus: (state, { payload }) => {
      state.typingStatus = {
        ...state.typingStatus,
        [payload?.id]: payload.status
      };
    }
  },
  extraReducers: {}
});

export const {
  setActiveChatID,
  enqueuePendingMessageQueue,
  enqueueTypingStatus,
  dequeuePendingMessageQueue
} = chatSlice.actions;

export default chatSlice.reducer;
