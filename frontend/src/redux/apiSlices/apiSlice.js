import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sour-libby-thzone.koyeb.app/api/v1/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 401) {
    // sending refresh token
    const refreshResult = await baseQuery(
      "auth/token/refresh/",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const user = api.getState().auth.user; // Assuming user info is stored in auth slice
      // Store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Log out if refresh token fails
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
