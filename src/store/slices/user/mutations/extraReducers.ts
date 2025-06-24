import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

import {getUserThunk} from "store/slices/user/mutations/thunks";

import {UserSlice} from "../type";

export const extraReducers = (builder: ActionReducerMapBuilder<UserSlice>) =>
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
        });
