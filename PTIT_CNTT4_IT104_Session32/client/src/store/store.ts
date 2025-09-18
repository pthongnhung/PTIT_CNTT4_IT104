import { createStore } from "redux";
// import { reducerCouter } from "./reducer/ReducerCounter";
import { rootReducer } from "./reducer/RootReducer";

export const store=createStore(rootReducer)