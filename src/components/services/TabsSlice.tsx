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

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   refetchOnFocus: true,
//   tagTypes: ['API'],
//   endpoints: (builder) => ({
//     // Define endpoints here, using '/api' where needed
//     getLoremIpsum: builder.query({
//       query: () => '/api',
//     }),
//   }),
// });

// export const { useGetLoremIpsumQuery } = apiSlice;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL } from '../../config';

// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
//   prepareHeaders: (headers) => {
//     headers.set('accept', 'application/json');
//     return headers;
//   },
// });

// export const TabsAPI = createApi({
//   baseQuery: baseQuery,
//   refetchOnFocus: true,
//   tagTypes: ['API'],
//   endpoints: (builder) => ({
//     getLoremIpsum: builder.query({
//       query: () => '/api',
//     }),
//   }),
// });

// export const { useGetLoremIpsumQuery } = TabsAPI;
