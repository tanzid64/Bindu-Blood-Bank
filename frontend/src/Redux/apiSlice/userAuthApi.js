import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bindu-blood-bank-api.onrender.com/api/v1/auth/",
  }),
  endpoints: (builder) => ({
    // User Registration
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
    // User Login
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    // All user profile
    getDonors: builder.query({
      query: (filterData) => {
        return {
          url: `profile/?blood_group=${
            filterData.availableDonor
          }&is_available=${filterData.availableDonor ? "true" : ""}&search=${
            filterData.search
          }`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetDonorsQuery,
} = userAuthApi;
