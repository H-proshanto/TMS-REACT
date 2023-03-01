import { createSlice } from "@reduxjs/toolkit";
import { TaskItem } from "../../../react-app-env";

const initialState: TaskItem[] = [];

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (_, action) => {
      return [...action.payload];
    },
    updateTaskList: (state, action) => {
      const updatedTaskList = state.map((taskItem) => {
        if (taskItem.id === action.payload.id) {
          return action.payload;
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
