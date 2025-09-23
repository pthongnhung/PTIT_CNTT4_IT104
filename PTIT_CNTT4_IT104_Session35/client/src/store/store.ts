import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice"
import students from "./slices/studentSlice"
import int from "./slices/intListSlice"
import theme from "./slices/themeSlice";
import display from "./slices/displaySlice"
import menu from "./slices/menuSlice"
import language from "./slices/languageSlice"
import favoriteUsers from "./slices/favoriteUsersSlice"
import auth from "./slices/authSlice"
export const store = configureStore({
  reducer: {
    counter,
    students,
    int,
    theme,
    display,
    menu,
    language,
    favoriteUsers,
    auth,
  },
});