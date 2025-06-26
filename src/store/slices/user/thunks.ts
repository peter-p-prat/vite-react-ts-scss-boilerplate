import {createAsyncThunk, miniSerializeError} from "@reduxjs/toolkit";
import {getRandomNumberZeroToTen} from "shared/utils/common";
import {fetchWithErrorHandling, isExtendedError} from "shared/utils/network";

import {resetUserData} from "./slice";
import {User, UserResponse, UserSlice} from "./type";

export const getUserThunk = createAsyncThunk<User, undefined, {state: {userReducer: UserSlice}}>(
    "user/getUserThunk",
    async (_, thunkAPI) => {
        try {
            const randomUserId = getRandomNumberZeroToTen();
            const userResponse = await fetchWithErrorHandling<UserResponse>(`https://reqres.in/api/users/${randomUserId.toString()}`, {
                method: "GET",
            });
            // await fetchWithErrorHandling("https://api.escuelajs.co/api/v1/users", {method: "GET"});
            return userResponse.data;
        } catch (error) {
            if (isExtendedError(error)) {
                return thunkAPI.rejectWithValue(miniSerializeError(error));
            }
            throw error;
        }
    },
    {condition: (_, thunkAPI) => !thunkAPI.getState().userReducer.isLoadingUser},
);

export const logoutThunk = createAsyncThunk<boolean, undefined>("user/logoutThunk", (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(resetUserData());
        return true;
    } catch (error) {
        if (isExtendedError(error)) {
            return thunkAPI.rejectWithValue(miniSerializeError(error));
        }
        throw error;
    }
});
