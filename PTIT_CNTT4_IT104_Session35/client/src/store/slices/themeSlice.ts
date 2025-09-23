import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "../../utils/types";

const initialState: ThemeState = {
    mode:"light"
}
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
   
    setTheme(state, action) {
      state.mode = action.payload;
    },
  },
});
export const { toggle, setTheme } = themeSlice.actions;
export default themeSlice.reducer;