import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { ApiCallDeleteMethod } from "../constant/base";

export interface UserFriends {
  name: string;
  score: number;
}
export interface User {
  id: number;
  name: string;
  phoneNumber: number;
  score: number;
  friends: UserFriends[];
}
export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: { id: 0, name: "", phoneNumber: 0, score: 0, friends: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignUser: (state, action: PayloadAction<UserState>) => {
      state.user = { ...action.payload.user };
    },
  },
});

// Action creators are generated for each case reducer function
export const { assignUser } = userSlice.actions;

export default userSlice.reducer;