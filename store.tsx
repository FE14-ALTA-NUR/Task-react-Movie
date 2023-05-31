import { configureStore } from "@reduxjs/toolkit";
import { themaSlice } from "./src/redux/Themes";
import { detailSlice } from "./src/redux/DetailMovie"
import { favSlice } from "./src/redux/Favorit"

const store = configureStore({
  reducer: {
    thema: themaSlice.reducer,
    detail: detailSlice.reducer,
    favorit: favSlice.reducer
  },
});

export default store;
