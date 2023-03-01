import { createSlice } from "@reduxjs/toolkit";
import { MemberItem } from "../../../react-app-env";

const initialState: MemberItem[] = [];

export const memberListSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {
    setMemberList: (_, params) => {
      return [...params.payload];
    },
    updateMemberList: (state, params) => {
      const updatedMemberList = state.map((memberItem) => {
        if (memberItem.id === params.payload.id) {
          return params.payload;
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
