import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  data: [], // Initialize data as an empty array
};

export const serviceSlice = createSlice({
  name: "services",
  initialState: INITIAL_STATE,
  reducers: {
    setServices: (state, action) => {
      // Instead of mutating state directly, return a new state object
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
