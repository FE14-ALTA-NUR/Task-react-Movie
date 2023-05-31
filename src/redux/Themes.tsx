import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  thema: any;
}

const initialState: ThemeState = {
  thema: "light",
};

export const themaSlice = createSlice({
  name: "thema",
  initialState,
  reducers: {
    
    themes(state, action: PayloadAction<string>) {
      state.thema = action.payload;
    },
    
  },
});

export const { themes } = themaSlice.actions;