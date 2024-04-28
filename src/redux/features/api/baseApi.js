import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //import this one: "/react"

const baseApi = createApi({
    // give api path name
    // give baseURL
    // set Endpoints
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1111/api/v1",
        credentials: "include",
    }),

    endpoints: (builder) => ({
        getAllCollege: builder.query({
            query: () => "/college",
        }),
        getLimitedCollege: builder.query({
            query: () => "/college?limit=3",
        }),
        getSearchedCollege: builder.query({
            query: (search) => `/college?search=${search}`,
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
                credentials: "include",
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
            invalidatesTags: ["admittedCollege"],
        }),
        passwordReset: builder.mutation({
            query: (data) => ({
                url: "/user/reset-password",
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
        getAdmittedCollege: builder.query({
            credentials: "include",
            query: () => "/admission",
            providesTags: ["admittedCollege"],
        }),
        addReview: builder.mutation({
            query: (data) => ({
                url: "/review",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["singleReview"],
        }),
        getAllReviews: builder.query({
            credentials: "include",
            query: () => "/review",
        }),
        getSingleReview: builder.query({
            credentials: "include",
            query: ({ userID, collegeID }) => `/review/${userID}/${collegeID}`,
            providesTags: ["singleReview"],
        }),
    }),
});

export const {
    useGetAllCollegeQuery,
    useGetLimitedCollegeQuery,
    useGetSearchedCollegeQuery,
    useGetSingleCollegeQuery,
    useGetGraduatesQuery,
    useAdmistUserMutation,
    useUpdateProfileMutation,
    useUserLogoutMutation,
    usePasswordResetMutation,
    useGetAdmittedCollegeQuery,
    useAddReviewMutation,
    useGetSingleReviewQuery,
    useGetAllReviewsQuery,
} = baseApi;
export default baseApi;
