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
        getLimitedCollege: builder.query({
            query: () => "/college?limit=3",
        }),
        getSingleCollege: builder.query({
            query: (id) => `/college/${id}`,
        }),
        getGraduates: builder.query({
            query: () => "/college/graduates",
        }),
        registerUser: builder.mutation({
            query: (user) => ({
                url: "/auth/register",
                method: "POST",
                body: user,
            }),
        }),
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/auth/login",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const {
    useGetAllCollegeQuery,
    useGetLimitedCollegeQuery,
    useGetSingleCollegeQuery,
    useGetGraduatesQuery,
    useRegisterUserMutation,
    useLoginUserMutation,
} = baseApi;
export default baseApi;
