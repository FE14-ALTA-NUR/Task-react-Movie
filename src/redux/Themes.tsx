import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  thema: any;
}

const initialState: ThemeState = {
  thema: "pastel",
};

export const themaSlice = createSlice({
  name: "thema",
  initialState,
  reducers: {
    
    themes(state, action: PayloadAction<ThemeState>) {
      state.thema = action.payload;
    },
    
  },
});

export const { themes } = themaSlice.actions;