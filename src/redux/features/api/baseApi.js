import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //import this one: "/react"

const baseApi = createApi({
    // give api path name
    // give baseURL
    // set Endpoints
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1111/api/v1",
    }),
    endpoints: (builder) => ({
        getAllCollege: builder.query({
            query: () => "/college",
        }),
    }),
});

export const { useGetAllCollegeQuery } = baseApi;
export default baseApi;
