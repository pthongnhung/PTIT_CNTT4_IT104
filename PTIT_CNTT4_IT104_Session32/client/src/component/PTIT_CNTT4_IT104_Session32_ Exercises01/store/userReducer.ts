import { createStore, combineReducers } from "redux";
import userReducer from "./store";


const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer);