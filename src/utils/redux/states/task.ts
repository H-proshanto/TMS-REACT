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
    updateTaskList: (state, params) => {
      const updatedTaskList = state.map((taskItem) => {
        if (taskItem.id === params.payload.id) {
          return params.payload;
        } else {
          return taskItem;
        }
      });
      return [...updatedTaskList];
    },
  },
});

export const { setTaskList, updateTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;
