import { apiSlice } from "../../redux/apiSlice";

export const TabsAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTabsText: builder.query({
            query: () => `/api`,
            providesTags: ["API"],
        }),
    }),
});

export const { useGetTabsTextQuery } = TabsAPI;
