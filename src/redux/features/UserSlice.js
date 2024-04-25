import { signInWithPopup } from "firebase/auth";
import firebaseAuth from "../../firebase-init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {
          username: "",
          email: "",
          id: "",
          isAdmitted: false,
          department: "",
          address: "",
          contact: "",
          isLoading: true,
          isError: false,
          error: "",
      };

export const googleLoginThunk = createAsyncThunk(
    "UserSlice/googleLogin",
    async (provider) => {
        const URL = "http://localhost:1111/api/v1/auth/login/social";
        const data = await signInWithPopup(firebaseAuth, provider);
        const tempUser = {
            username: data?.user?.displayName,
            email: data?.user?.email,
        };

        const response = await getUserHandler(URL, tempUser);
        const user = {
            username: response?.result?.username,
            email: response?.result?.email,
            id: response?.result?._id,
            isAdmitted: response?.result?.isAdmitted,
            department: response?.result?.department,
            address: response?.result?.address,
            contact: response?.result?.contact,
        };

        return user;
    }
);

export const userRegistrationThunk = createAsyncThunk(
    "UserSlice/userRegister",
    async ({ userObject, reset }) => {
        const URL = "http://localhost:1111/api/v1/auth/register";

        const response = await getUserHandler(URL, userObject);

        if (response.status) {
            const user = {
                username: response?.result?.username,
                email: response?.result?.email,
                id: response?.result?._id,
                isAdmitted: response?.result?.isAdmitted,
                department: response?.result?.department,
                address: response?.result?.address,
                contact: response?.result?.contact,
            };
            reset();
            Swal.fire({
                icon: "success",
                title: "Done...",
                text: "Successfully registered",
            });
            return user;
        } else {
            Swal.fire({
                icon: "error",
                title: response.message,
                text: response.result,
            });
            throw new Error("registration failed");
        }
        // const user = {
        //     username: response?.result?.username,
        //     email: response?.result?.email,
        //     id: response?.result?._id,
        //     isAdmitted: response?.result?.isAdmitted,
        // };
    }
);

export const userLoginThunk = createAsyncThunk(
    "UserSlice/userLogin",
    async ({ userObject, reset }) => {
        const URL = "http://localhost:1111/api/v1/auth/login";

        const response = await getUserHandler(URL, userObject);

        if (response.status) {
            const user = {
                username: response?.result?.username,
                email: response?.result?.email,
                id: response?.result?._id,
                isAdmitted: response?.result?.isAdmitted,
                department: response?.result?.department,
                address: response?.result?.address,
                contact: response?.result?.contact,
            };
            reset();
            Swal.fire({
                icon: "success",
                title: "Done",
                text: response.message,
            });
            return user;
        } else {
            Swal.fire({
                icon: "error",
                title: response.message,
                text: response.result,
            });
            throw new Error(response.result);
        }
    }
);

const getUserHandler = async (url, userData) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log("google login issue:", error);
    }
};

const Slice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            console.log(payload);
            state.username = payload.username;
            state.email = payload.email;
            state.id = payload.id;
            state.isAdmitted = payload.isAdmitted;
            state.department = payload.department;
            state.address = payload.address;
            state.contact = payload.contact;
            state.isLoading = payload.isLoading;
            state.isError = payload.isError;
            localStorage.setItem("userInfo", JSON.stringify(payload));
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload.isLoading;
        },
        userLogout: (state) => {
            state.email = "";
            state.username = "";
            state.id = "";
            state.isAdmitted = false;
            state.department = "";
            state.address = "";
            state.contact = "";
            state.isError = false;
            state.isLoading = false;
            localStorage.removeItem("userInfo");
        },
    },
    extraReducers: (builder) => {
        // for user register
        builder
            .addCase(userRegistrationThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            })
            .addCase(userRegistrationThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.username = payload.username;
                state.email = payload.email;
                state.id = payload.id;
                state.isAdmitted = payload.isAdmitted;
                state.department = payload.department;
                state.address = payload.address;
                state.contact = payload.contact;
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        ...payload,
                        isLoading: false,
                        isError: false,
                        error: "",
                    })
                );
            })
            .addCase(userRegistrationThunk.rejected, (state, action) => {
                console.log(action.error.message);
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            });

        // for user login
        builder
            .addCase(userLoginThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            })
            .addCase(userLoginThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.username = payload.username;
                state.email = payload.email;
                state.id = payload.id;
                state.isAdmitted = payload.isAdmitted;
                state.department = payload.department;
                state.address = payload.address;
                state.contact = payload.contact;
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        ...payload,
                        isLoading: false,
                        isError: false,
                        error: "",
                    })
                );
            })
            .addCase(userLoginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            });

        // for googleLogin
        builder
            .addCase(googleLoginThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            })
            .addCase(googleLoginThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.username = payload.username;
                state.email = payload.email;
                state.id = payload.id;
                state.isAdmitted = payload.isAdmitted;
                state.department = payload.department;
                state.address = payload.address;
                state.contact = payload.contact;
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        ...payload,
                        isLoading: false,
                        isError: false,
                        error: "",
                    })
                );
            })
            .addCase(googleLoginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.username = "";
                state.email = "";
                state.id = "";
                state.isAdmitted = false;
                state.department = "";
                state.address = "";
                state.contact = "";
            });
    },
});
export const { setUser, toggleLoading, userLogout } = Slice.actions;
export default Slice.reducer;
