import { createStore, combineReducers } from "redux";
import randomReducer from "./randomReducer";

const rootReducer = combineReducers({
  random: randomReducer,
});

export const store = createStore(rootReducer);
