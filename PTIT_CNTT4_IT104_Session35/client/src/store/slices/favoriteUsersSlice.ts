import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export type FavUser = {
  id: string;
  userName: string;
  favorites: number; 
  isFavorite: boolean; 
};

type FavState = {
  users: FavUser[];
};

const initialState: FavState = {
  users: [
    { id: nanoid(), userName: "Nguyễn Văn A", favorites: 0, isFavorite: false },
    { id: nanoid(), userName: "Nguyễn Văn B", favorites: 0, isFavorite: false },
    { id: nanoid(), userName: "Nguyễn Văn C", favorites: 0, isFavorite: false },
    { id: nanoid(), userName: "Nguyễn Văn D", favorites: 0, isFavorite: false },
  ],
};

const favoriteUsersSlice = createSlice({
  name: "favoriteUsers",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const u = state.users.find((x) => x.id === action.payload);
      if (!u) return;
    
      if (u.isFavorite) {
        u.isFavorite = false;
        u.favorites = Math.max(0, u.favorites - 1);
      } else {
        u.isFavorite = true;
        u.favorites += 1;
      }
    },
   
    resetAll(state) {
      state.users.forEach((u) => {
        u.isFavorite = false;
        u.favorites = 0;
      });
    },
  },
});

export const { toggleFavorite, resetAll } = favoriteUsersSlice.actions;
export default favoriteUsersSlice.reducer;
