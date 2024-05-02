import { apiSlice } from "./apiSlice";

const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postContactMsg: builder.mutation({
      query: (data) => {
        return {
          url: "core/contact/",
          method: "POST",
          body: data,
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

export const { usePostContactMsgMutation } = contactApi;
