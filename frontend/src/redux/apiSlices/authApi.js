import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  tagTypes: ["allusers"],
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
      invalidatesTags: ["allusers"],
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
          url: `auth/profile/?p=${query.p}&is_available=${query.isAvailable}&blood_group=${query.bloodGroup}`,
          method: "GET",
        };
      },
      providesTags: (item) => {
        if (Array.isArray(item)) {
          return [
            ...item.map(({ id }) => ({ type: "allusers", id })),
            "allusers",
          ];
        } else {
          return ["allusers"];
        }
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
    updateUserProfile: builder.mutation({
      query: (formData) => {
        console.log(formData.get("username"));
        return {
          url: `auth/profile/${formData.get("username")}/`,
          method: "PATCH",
          body: formData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
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
  useUpdateUserProfileMutation,
} = authApi;
