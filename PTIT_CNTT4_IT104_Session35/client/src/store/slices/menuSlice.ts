import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type MenuState = { collapsed: boolean };
const initialState: MenuState = { collapsed: false }; 

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle(state) {
      state.collapsed = !state.collapsed;
    },
    setCollapsed(state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload;
    },
  },
});

export const { toggle, setCollapsed } = menuSlice.actions;
export default menuSlice.reducer; 
