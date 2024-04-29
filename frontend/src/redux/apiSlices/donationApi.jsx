import { apiSlice } from "./apiSlice";

const donationApi = apiSlice.injectEndpoints({
  tagTypes: ["DonationRequests"],
  endpoints: (builder) => ({
    getDonationRequest: builder.query({
      query: (query) => {
        return {
          url: "donation/request/",
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "DonationRequests", id })),
              "DonationRequests",
            ]
          : ["DonationRequests"],
    }),
    getDonationReport: builder.query({
      query: (query) => {
        return {
          url: `donation/report/`,
          method: "GET",
        };
      },
      providesTags: ["DonationRequests"],
    }),
    postDonationRequest: builder.mutation({
      query: (data) => {
        return {
          url: "donation/request/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["DonationRequests"],
    }),
  }),
});


export const {
  useGetDonationRequestQuery,
  useGetDonationReportQuery,
  usePostDonationRequestMutation,
} = donationApi;
