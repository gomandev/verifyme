import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./ducks/auth";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof Object>;

export default rootReducer;
