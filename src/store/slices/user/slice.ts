import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {getUserThunk} from "./thunks";
import {initialState, User, UserSlice} from "./type";

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
    extraReducers: (builder: ActionReducerMapBuilder<UserSlice>) =>
        builder
            .addCase(getUserThunk.pending, (state) => {
                state.isLoadingUser = true;
            })
            .addCase(getUserThunk.rejected, (state) => {
                state.user = null;
            })
            .addCase(getUserThunk.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(getUserThunk.settled, (state) => {
                state.isLoadingUser = false;
            }),
});

export const {setUser, resetUserData} = userSlice.actions;

export const userReducer = userSlice.reducer;
