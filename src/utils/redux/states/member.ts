import { createSlice } from "@reduxjs/toolkit";
import { MemberItem } from "../../../react-app-env";

const initialState: MemberItem[] = [];

export const memberListSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMemberList: (state, payload) => {
      console.log(payload);
      return state;
    },
  },
});

export const { setMemberList } = memberListSlice.actions;
export default memberListSlice.reducer;
