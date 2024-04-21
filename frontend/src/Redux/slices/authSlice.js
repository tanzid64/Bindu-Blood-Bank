import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: {},
  access_token: null,
  refresh_token: null,
};

export const authSlice = createSlice({
  name: "user_info",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      (state.user = action.payload.user),
        (state.access_token = action.payload.access_token);
      state.refresh_token = action.payload.refresh_token;
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;