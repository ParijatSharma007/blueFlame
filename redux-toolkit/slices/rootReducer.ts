import chatSlice from "./chat.slice";
import globalSlice from "./global.slice";
import userSlice from "./userSlice";

const rootReducer = {
  userSlice,
  globalSlice,
  chatSlice
};

export default rootReducer;
