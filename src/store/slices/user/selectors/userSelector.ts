import {createSelector} from "@reduxjs/toolkit";

import {useAppSelector} from "store/hooks";
import {RootState} from "store/store";

export const userSliceSelector = createSelector(
    (state: RootState) => state.userReducer,
    (state) => ({...state}),
);

export const isLoadingUserSelector = createSelector(userSliceSelector, ({isLoadingUser}) => isLoadingUser);

export const userSelector = createSelector(userSliceSelector, ({user}) => user);

export const useUserSelector = () => useAppSelector(userSliceSelector);
