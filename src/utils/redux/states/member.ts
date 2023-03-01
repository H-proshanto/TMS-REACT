import { createSlice } from "@reduxjs/toolkit";
import { MemberItem } from "../../../react-app-env";

const initialState: MemberItem[] = [];

export const memberListSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {
    setMemberList: (_, action) => {
      return [...action.payload];
    },
    updateMemberList: (state, action) => {
      const updatedMemberList = state.map((memberItem) => {
        if (memberItem.id === action.payload.id) {
          return action.payload;
        } else {
          return memberItem;
        }
      });
      return [...updatedMemberList];
    },
  },
});

export const { setMemberList, updateMemberList } = memberListSlice.actions;
export default memberListSlice.reducer;
