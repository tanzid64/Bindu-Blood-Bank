import { apiSlice } from "./apiSlice";

const donationApi = apiSlice.injectEndpoints({
  tagTypes: ["DonationRequests", "DonationReports"],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "DonationReports", id })),
              "DonationReports",
            ]
          : ["DonationReports"],
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
    postDonationReport: builder.mutation({
      query: (id) => {
        return {
          url: "donation/report/",
          method: "POST",
          body: { event_id: id },
        };
      },
      invalidatesTags: ["DonationRequests", 'DonationReports'],
    }),
  }),
});


export const {
  useGetDonationRequestQuery,
  useGetDonationReportQuery,
  usePostDonationRequestMutation,
  usePostDonationReportMutation,
} = donationApi;
