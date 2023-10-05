import { configureStore } from "@reduxjs/toolkit";
import zoomSlice from "../features/zoomSlice";
import bgPositionSlice from "../features/bgPositionSlice";

export const store = configureStore({
  reducer: {
    zoom: zoomSlice,
    bgPosition: bgPositionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
