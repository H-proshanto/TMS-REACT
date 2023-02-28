import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../../react-app-env";
import { loginMethod, registrationMethod } from "../../api/public/auth";

const initialState: UserType = {
  status: "idle",
  isLoggedIn: false,
  info: {
    id: null,
    name: "",
    email: "",
    createdAt: null,
    updatedAt: null,
  },
  error: "",
};

export const login: any = createAsyncThunk("user/login", loginMethod);
export const registration: any = createAsyncThunk(
  "user/login",
  registrationMethod
);

const saveUser = (state: UserType) => {
  localStorage.setItem("@user", JSON.stringify(state));
};

const init = () => {
  const retrievedState = localStorage.getItem("@user");
  const parsedState: UserType = retrievedState && JSON.parse(retrievedState);
  return retrievedState ? parsedState : initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: init(),
  reducers: {
    logout: (state) => {
      localStorage.clear();
      return initialState;
    },
    resetStatus: (state) => {
      return { ...state, status: "idle" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "running";
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.info = { ...action.payload?.user };
        state.error = "";
        state.isLoggedIn = true;
        state.status = "resolved";
        saveUser(state);
      })
      .addCase(login.rejected, (state, action: any) => {
        state.info = initialState.info;
        state.error = action.error?.message;
        state.isLoggedIn = false;
        state.status = "error";
      });
  },
});

export const { logout, resetStatus } = userSlice.actions;
export default userSlice.reducer;
