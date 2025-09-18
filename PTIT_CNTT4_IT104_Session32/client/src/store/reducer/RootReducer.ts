import { combineReducers } from "redux";
import { reducerCouter } from "./ReducerCounter";
import { reducerStudent } from "./ReducerStudent";

export const rootReducer = combineReducers({
    counter: reducerCouter,
    student:reducerStudent
})