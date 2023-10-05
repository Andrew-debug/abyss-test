import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface BgState {
  top: number;
  left: number;
}

const initialState: BgState = { top: 0, left: 0 };

const bgPositionSlice = createSlice({
  name: "bgPosition",
  initialState,
  reducers: {
    updateBgPosition: (state, action: PayloadAction<BgState>) => {
      state.top = action.payload.top;
      state.left = action.payload.left;
    },
    centerBgPosition: () => {
      return initialState;
    },
    moveBgTop: (state) => {
      const newTop = state.top + 100;
      return { ...state, top: newTop };
    },
    moveBgRight: (state) => {
      const newTop = state.left - 100;
      return { ...state, left: newTop };
    },
    moveBgLeft: (state) => {
      const newTop = state.left + 100;
      return { ...state, left: newTop };
    },
    moveBgBottom: (state) => {
      const newTop = state.top - 100;
      return { ...state, top: newTop };
    },
  },
});

export const {
  updateBgPosition,
  centerBgPosition,
  moveBgTop,
  moveBgRight,
  moveBgLeft,
  moveBgBottom,
} = bgPositionSlice.actions;

export const selectBgPosition = (state: RootState) => state.bgPosition;

export default bgPositionSlice.reducer;
