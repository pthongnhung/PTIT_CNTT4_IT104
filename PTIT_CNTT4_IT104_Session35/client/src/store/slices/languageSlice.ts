import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Lang = "en" | "vi";

type LanguageState = { lang: Lang };

const initialState: LanguageState = { lang: "en" }; 

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
    toggleLanguage(state) {
      state.lang = state.lang === "en" ? "vi" : "en";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer; 
