import { configureStore } from "@reduxjs/toolkit";
import { themaSlice } from "./src/redux/Themes";

const store = configureStore({
  reducer: {
    thema: themaSlice.reducer
  },
});

export default store;
