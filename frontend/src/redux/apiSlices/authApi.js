import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Get All Users
    getAllUserProfile: builder.query({
      query: (query) => {
        return {
          url: "auth/profile/",
          method: "GET",
        };
      },
    }),
  })
});

export const { useGetAllUserProfileQuery } = authApi;