import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: "auth/login/",
          method: "POST",
          body: { email: credentials.email, password: credentials.password },
        };
      },
    }),
    logout: builder.mutation({
      query: (credentials) => {
        return {
          url: "auth/logout/",
          method: "POST",
          body: { refresh_token: credentials },
        };
      },
    }),
    // Get All Users
    getAllUserProfile: builder.query({
      query: (query) => {
        return {
          url: "auth/profile/",
          method: "GET",
        };
      },
    }),
    getUserProfile: builder.query({
      query: (username) => {
        return {
          url: `auth/profile/${username}/`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllUserProfileQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
} = authApi;
