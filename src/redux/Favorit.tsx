import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface favItem {
  favId: number;
  
}

export interface FavState {
  favItems: favItem[];
}

const initialState: FavState = {
  favItems: [],
};

export const favSlice = createSlice({
  name: "favorit",
  initialState,
  reducers: {
    addFavorit(state, action: PayloadAction<favItem>) {
      state.favItems.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      state.favItems = state.favItems.filter((item) => item.favId !== action.payload);
    },
  },
});


export const { addFavorit, remove } = favSlice.actions;