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
  },
});

export const { setMemberList } = memberListSlice.actions;
export default memberListSlice.reducer;
