import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { ApiCallDeleteMethod } from "../constant/base";

export interface UserFriends {
  name: string;
  avatarSrc: string;
  score: number;
}
export interface Question {
  name: string;
  answers: number[];
}
export interface User {
  _id: string;
  name: string;
  phoneNumber: number;
  score: number;
  policeMale: number;
  friends: UserFriends[];
  questions: Question[];
  createdAt: string;
  updatedAt: string;
}
export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    phoneNumber: 0,
    score: 0,
    friends: [],
    policeMale: 0,
    questions: [],
    createdAt: "",
    updatedAt: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignUser: (state, action: PayloadAction<UserState>) => {
      state.user = { ...action.payload.user };
    },
    updateUserScore: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { assignUser, updateUserScore } = userSlice.actions;

export default userSlice.reducer;
