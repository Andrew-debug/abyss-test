import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { zoomsVal } from "../../constants";

const initialState: number = 100;

const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    zoomToValue: (_, action: PayloadAction<number>) => {
      return action.payload;
    },
    zoomOut: (state) => {
      const curZoom = zoomsVal.indexOf(state);
      if (curZoom === 0) return state;
      return zoomsVal[curZoom - 1];
    },
    zoomIn: (state) => {
      const curZoom = zoomsVal.indexOf(state);
      if (curZoom === zoomsVal.length - 1) return state;
      return zoomsVal[curZoom + 1];
    },
  },
});

export const { zoomOut, zoomIn, zoomToValue } = zoomSlice.actions;

export const selectZoom = (state: RootState) => state.zoom;

export default zoomSlice.reducer;
