import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ViewMode = "list" | "grid";
type DisplayState = { mode: ViewMode };

const initialState: DisplayState = { mode: "list" };

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = displaySlice.actions;
export default displaySlice.reducer;
