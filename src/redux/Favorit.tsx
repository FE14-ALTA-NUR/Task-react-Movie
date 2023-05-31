import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  
}

export interface FavState {
  items: Item[];
}

const initialState: FavState = {
  items: [],
};

export const favSlice = createSlice({
  name: "favorit",
  initialState,
  reducers: {
    addFavorit(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const { addFavorit, remove } = favSlice.actions;