import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { message: null, type: null },
  reducers: {
    setToast: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
    },
    removeToast: (state, action) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;

export const selectCurrentMessage = (state) => state.toast.message;
export const selectCurrentType = (state) => state.toast.type;
