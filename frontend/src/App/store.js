import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../Services/userAuthApi";
import { userProfileApi } from "../features/userProfile";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthApi.middleware,
      userProfileApi.middleware
    ),
});
setupListeners(store.dispatch);
