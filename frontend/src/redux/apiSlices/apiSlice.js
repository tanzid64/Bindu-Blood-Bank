import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://127.0.0.1:8000/api/v1/",
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
    const extraOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: localStorage.getItem("refreshToken"),
      }),
    };
    const newAccessToken = await baseQuery(
      "auth/token/refresh/",
      api,
      extraOptions
    );
    if (newAccessToken) {
      const user = api.getState().auth.user;
      // Store the new token
      api.dispatch(setCredentials({ user, newAccessToken }));
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
