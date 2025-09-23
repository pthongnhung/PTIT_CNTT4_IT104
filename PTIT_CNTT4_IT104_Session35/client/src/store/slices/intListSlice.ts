import { createSlice } from "@reduxjs/toolkit";

import { InitialIntList } from "../../utils/types";
const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random()*(max-min+1)+min)
}
const initialState: InitialIntList={
    value:[]
}
const intSlice = createSlice({
    name: "int",
    initialState,
    reducers: {
        randomNumber: (state, action) => {
            const {min,max}=action.payload
            state.value.push(randomInt(min,max))
        },
        clear: (state) => {
            state.value=[]
        }
    }
});
export const { randomNumber, clear }=intSlice.actions;
export default intSlice.reducer;