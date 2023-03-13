import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "primary",
  color: "#0275d8",
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },

    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setTheme, setColor } = portfolioSlice.actions;

export default portfolioSlice.reducer;
