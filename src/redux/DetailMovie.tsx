import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DetailMovieState {
  value: number;
}

const initialState: DetailMovieState = {
  value: 348734,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    
    detail(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    
  },
});

export const { detail } = detailSlice.actions;