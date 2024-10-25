import {
    BaseQueryApi,
    createApi,
    FetchArgs,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../config";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set("accept", "application/json");
        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    refetchOnFocus: true,
    tagTypes: ["API"],
    endpoints: (builder) => ({}),
});
