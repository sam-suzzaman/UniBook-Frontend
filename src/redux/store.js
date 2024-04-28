import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import UserSlice from "./features/UserSlice";
import SearchSlice from "./features/SearchSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        userSlice: UserSlice,
        searchCollegeSlice: SearchSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
