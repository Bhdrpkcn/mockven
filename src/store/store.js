import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api/apiSlice";
import animationReducer from "./animation/animationSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    animation: animationReducer,
  },
  devTools: true,
});

export default store;
