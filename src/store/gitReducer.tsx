import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface gitState {
  token: string | undefined;
}

const initialState: gitState = {
  token: process.env.REACT_APP_TOKEN,
};

const gitSlice = createSlice({
  name: "git",
  initialState,
  reducers: {
    auth: (state) => {
      state.token = process.env.REACT_APP_TOKEN;
    },
  },
});

export const { auth } = gitSlice.actions;
export default gitSlice.reducer;
