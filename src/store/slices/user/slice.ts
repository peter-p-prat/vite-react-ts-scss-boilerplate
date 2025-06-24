import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {extraReducers} from "./mutations";
import {initialState, User} from "./type";

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        resetUserData: (state) => {
            state.user = undefined;
        },
    },
    extraReducers,
});

export const {setUser, resetUserData} = userSlice.actions;

export const userReducer = userSlice.reducer;
