import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Register
    register: builder.mutation({
      query: (credentials) => {
        return {
          url: "auth/register/",
          method: "POST",
          body: credentials,
        };
      },
    }),
    // Confirm Email
    confirmEmail: builder.mutation({
      query: (otp) => {
        return {
          url: `auth/verify-email/`,
          method: "POST",
          body: { otp: otp },
        };
      },
    }),
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
    // Logout
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
    // Get User Profile
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
  useRegisterMutation,
  useConfirmEmailMutation,
  useGetAllUserProfileQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
} = authApi;
