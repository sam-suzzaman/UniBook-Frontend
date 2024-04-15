import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import UserSlice from "./features/UserSlice";

export const store = configureStore({
    reducer: { [baseApi.reducerPath]: baseApi.reducer, userSlice: UserSlice },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
