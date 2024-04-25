import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //import this one: "/react"

const baseApi = createApi({
    // give api path name
    // give baseURL
    // set Endpoints
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1111/api/v1",
    }),
    credentials: "include",
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
        admistUser: builder.mutation({
            query: (data) => ({
                url: "/admission",
                method: "POST",
                body: data,
            }),
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useGetAllCollegeQuery,
    useGetLimitedCollegeQuery,
    useGetSingleCollegeQuery,
    useGetGraduatesQuery,
    useAdmistUserMutation,
    useUpdateProfileMutation,
    useUserLogoutMutation,
} = baseApi;
export default baseApi;
