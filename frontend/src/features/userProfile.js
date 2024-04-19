import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/auth/" }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "profile/",
    }),
  }),
});

export const { useGetAllUserQuery } = userProfileApi;
