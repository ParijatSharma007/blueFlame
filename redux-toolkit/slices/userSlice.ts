import { userData } from "@/types/common.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";
import { userSliceData } from "../interfaces/interfaces";

const initialState: userSliceData = {
  isLoggedIn: false,
  userData: null,
  token : null
};

export const loginUser = createAsyncThunk(
  "/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      // const res = await axiosInstance.post(
      //   "appointment/terminal-appointments-list",
      //   data
      // );
      // return res.data;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }: { payload: userData }) => {
      // state.email
      state.userData = payload;
      state.isLoggedIn = true;
    },
    checkLoggedInServer: (state, { payload }) => {
      state.isLoggedIn = payload?.hasToken;
      state.userData = payload?.user;
      state.token = payload
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      destroyCookie(null, "token");
      destroyCookie(null, "user");
    }
  },
  extraReducers: {}
});

export const { setLoginData, checkLoggedInServer, logout } = userSlice.actions;

export default userSlice.reducer;
