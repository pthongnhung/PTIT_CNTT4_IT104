import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const reponse = await axios.get("http://localhost:8080/users");
  } catch (error) {
    console.error(error);
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, () => {
        console.log("Dang xu li qua trinh");
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        console.log("Lay du lieu thanh cong");
      })
      .addCase(getAllUser.rejected, () => {
        console.log("Qua trinh lay du lieu that bai");
      });
  },
});
export default userSlice.reducer;
