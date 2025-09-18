
import { createStore, combineReducers } from "redux";
import themeReducer from "./themeReducer";

const persistedState = {
  themeState: {
    darkMode: localStorage.getItem("darkMode") === "true"
  }
};

const rootReducer = combineReducers({
  themeState: themeReducer,
});

export const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("darkMode", state.themeState.darkMode.toString());
});
