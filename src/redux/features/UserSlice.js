import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseAuth from "../../firebase-init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    isLoading: true,
    isError: false,
    error: "",
};

// Creating thunk--> //createAsyncThunk(thunkName,async callback_fun)
export const registerUser = createAsyncThunk(
    "UserSlice/register",
    async (provider) => {
        const data = await signInWithPopup(firebaseAuth, provider);

        return {
            username: data?.user?.displayName,
            email: data?.user?.email,
        };
    }
);

const Slice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.username = payload.username;
            state.email = payload.email;
            state.isLoading = payload.isLoading;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload.isLoading;
        },
        socialLogOut: (state) => {
            state.email = "";
            state.username = "";
        },
    },
    extraReducers: (builder) => {
        // for register
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
                state.username = "";
                state.email = "";
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.username = payload.username;
                state.email = payload.email;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.username = "";
                state.email = "";
            });
    },
});
export const { setUser, toggleLoading, socialLogOut } = Slice.actions;
export default Slice.reducer;
