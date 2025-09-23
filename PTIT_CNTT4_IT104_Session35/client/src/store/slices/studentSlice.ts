import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "Student",
  initialState: {
    students: [
      {
        id: 1,
        name: "Hong Nhung",
      },
      {
        id: 2,
        name: "Nhung",
      },
    ],
  },
  reducers: {
    //cai dat nhung cai action, hanh dong
    addStudent: (state, action) => {
      console.log("111", state);
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
