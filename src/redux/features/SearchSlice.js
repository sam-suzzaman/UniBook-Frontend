import { createSlice } from "@reduxjs/toolkit";

const initialState = sessionStorage.getItem("searchCollege")
    ? JSON.parse(sessionStorage.getItem("searchCollege"))
    : {
          searchBy: "",
      };

const Slice = createSlice({
    name: "SearchCollegeSlice",
    initialState,
    reducers: {
        setSearchCollegeState: (state, { payload }) => {
            state.searchBy = payload.searchBy;
            sessionStorage.setItem("searchCollege", JSON.stringify(payload));
        },
        resetSearchCollegeState: (state, { payload }) => {
            state.searchBy = "";
            sessionStorage.removeItem("searchCollege");
        },
    },
});

export const { setSearchCollegeState, resetSearchCollegeState } = Slice.actions;

export default Slice.reducer;
