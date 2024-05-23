import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchApiStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchApiSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchApiFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchApiStart, fetchApiFailure, fetchApiSuccess } =
  apiSlice.actions;

export default apiSlice.reducer;
