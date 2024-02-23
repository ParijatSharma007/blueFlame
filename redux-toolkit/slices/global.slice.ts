import { createSlice } from "@reduxjs/toolkit";
import { globalStateInterface } from "../interfaces/interfaces";

const initialState: globalStateInterface = {
  counter: 0,
  theme: "light-mode"
};

const globalSlice = createSlice({
  name: "globalSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGlobalThemeMode: (state, { payload }) => {
      state.theme = payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  },
  extraReducers: {}
});

export const { setGlobalThemeMode, decrement } = globalSlice.actions;

export default globalSlice.reducer;
