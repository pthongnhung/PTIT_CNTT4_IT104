import { createStore, combineReducers } from "redux";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  companyState: companyReducer,
});

export const store = createStore(rootReducer);