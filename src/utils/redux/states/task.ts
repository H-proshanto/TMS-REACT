import { createSlice } from "@reduxjs/toolkit";
import { TaskItem } from "../../../react-app-env";

const initialState: TaskItem[] = [];

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (_, params) => {
      return [...params.payload];
    },
  },
});

export const { setTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;
