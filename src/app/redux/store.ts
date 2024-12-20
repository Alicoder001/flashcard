import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slice/mainSlice";
export const store = configureStore({
  reducer: {
    m: mainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
