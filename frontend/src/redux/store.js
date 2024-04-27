import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import servicesReducer from "./slices/servicesSlice";
import servicesApi from "./apiSlices/servicesApi";

const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(servicesApi.middleware);
  },
});
setupListeners(store.dispatch);
export { useFetchServicesQuery } from "./apiSlices/servicesApi";
export default store;
