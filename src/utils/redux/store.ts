import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./states/user";
import memberListReducer from "./states/member";

export const store = configureStore({
  reducer: {
    user: userReducer,
    memberList: memberListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
