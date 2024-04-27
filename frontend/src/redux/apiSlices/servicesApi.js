import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sour-libby-thzone.koyeb.app/api/v1/core/",
  }),
  endpoints(builder) {
    return {
      fetchServices: builder.query({
        query: (query) => {
          return {
            url: "services/",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchServicesQuery } = servicesApi;
export default servicesApi;
