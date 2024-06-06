import { createSlice } from "@reduxjs/toolkit";

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    scrollPercentage: 0,
    sectionStage: "",
  },
  reducers: {
    setScrollPercentage: (state, action) => {
      state.scrollPercentage = action.payload;
    },
    setSectionStage: (state, action) => {
      state.sectionStage = action.payload;
      console.log(state.sectionStage);
    },
  },
});

export const { setScrollPercentage, setSectionStage } = animationSlice.actions;

export default animationSlice.reducer;
