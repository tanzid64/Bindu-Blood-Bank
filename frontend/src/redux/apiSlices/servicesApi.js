import { apiSlice } from "./apiSlice";

const servicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: (query) => {
        return {
          url: "core/services/",
          method: "GET",
        };
      },
    }),
    getServiceDetail: builder.query({
      query: (slug) => {
        return {
          url: `core/services/${slug}/`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceDetailQuery } = servicesApi;
