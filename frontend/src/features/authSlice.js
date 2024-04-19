import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
};

export const authSlice = createSlice({
  name: "auth_token",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    removeUserToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
  },
});

export const {setUserToken, removeUserToken} = authSlice.actions
export default authSlice.reducer