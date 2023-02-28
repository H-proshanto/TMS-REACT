import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./states/user";
import memberListReducer from "./states/member";
import taskListReducer from "./states/task";

export const store = configureStore({
  reducer: {
    user: userReducer,
    memberList: memberListReducer,
    taskList: taskListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
