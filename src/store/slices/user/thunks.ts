import {createAsyncThunk, miniSerializeError} from "@reduxjs/toolkit";
import {fetchWithErrorHandling, isExtendedError} from "shared/utils/network";

import {resetUserData} from "./slice";
import {User, UserSlice} from "./type";

export const getUserThunk = createAsyncThunk<User, undefined, {state: {userReducer: UserSlice}}>(
    "user/getUserThunk",
    async (_, thunkAPI) => {
        try {
            const user = await fetchWithErrorHandling<User>("https://api.escuelajs.co/api/v1/users/1", {
                method: "GET",
            });
            await fetchWithErrorHandling("https://api.escuelajs.co/api/v1/users", {method: "GET"});
            return user;
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
