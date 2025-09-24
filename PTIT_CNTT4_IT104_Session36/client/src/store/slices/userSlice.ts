import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const reponse = await axios.get("http://localhost:8080/users");
    return reponse.data;
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
      .addCase(getAllUser.fulfilled, (state: any, action) => {
        console.log("Lay du lieu thanh cong", action.payload);
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, () => {
        console.log("Qua trinh lay du lieu that bai");
      });
  },
});
export default userSlice.reducer;
