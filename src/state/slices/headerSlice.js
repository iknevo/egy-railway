import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggle(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const { toggle } = headerSlice.actions;
export default headerSlice.reducer;
