import { createStore } from "redux";
import { reducerCouter } from "./reducer/ReducerCounter";

export const store=createStore(reducerCouter)