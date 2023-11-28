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
export interface SingleQuestionnaire {
  question: string;
  name: string;
  answer: number;
}
export interface Questionnaire {
  age: number;
  gender: number;
  questionnaireBody: SingleQuestionnaire[];
}
export interface NthTimeResult {
  time: Date;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  rank: number;
  questions: Question[];
  questionnaire: Questionnaire;
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
  secondCreatedAt?: string;
  firstTimeResult?: NthTimeResult;
  secondTimeResult?: NthTimeResult;
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
    // secondTimeResult: { time: "", correctAnswers: 0, score: 0, questions: [] },
    // firstTimeResult: { time: "", correctAnswers: 0, score: 0, questions: [] },
    // secondCreatedAt: "",
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
