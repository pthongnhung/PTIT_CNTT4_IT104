import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export const store = createStore(rootReducer);
