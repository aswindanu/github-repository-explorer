import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "./gitReducer";

export const store = configureStore({
  reducer: {
    git: gitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
