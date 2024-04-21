import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../apiSlice/userAuthApi";
// Creating store for the application
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});
setupListeners(store.dispatch);
