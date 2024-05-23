import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api/apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
  devTools: true,
});

export default store;
