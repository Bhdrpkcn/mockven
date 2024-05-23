import { createAsyncThunk } from "@reduxjs/toolkit";
import { DATAFLOW } from "../../constants/mainFlowData";
import { fetchApiStart, fetchApiFailure, fetchApiSuccess } from "./apiSlice";

export const fetchData = createAsyncThunk(
  "api/fetchData",
  async (_, { getState, dispatch }) => {
    try {
      dispatch(fetchApiStart());

      // Simulate API response delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock API fetch
      dispatch(fetchApiSuccess(DATAFLOW));
    } catch (error) {
      console.error("API Error:", error.message);
      dispatch(fetchApiFailure(error.message));
      throw error;
    }
  }
);

export default fetchData;
