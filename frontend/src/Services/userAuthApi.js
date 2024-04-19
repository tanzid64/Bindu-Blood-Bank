import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bindu-blood-bank-api.onrender.com/api/v1/auth/",
    // baseUrl: "http://127.0.0.1:8000/api/v1/auth/",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
   
  }),
});

export const { useRegisterUserMutation } = userAuthApi;
