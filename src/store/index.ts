import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import tarotSlice from "./slices/tarotSlice";
import todoDetailSlice from "./slices/todoDetailSlice";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    todoDetail: todoDetailSlice,
    tarot: tarotSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
