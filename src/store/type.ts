import {AsyncThunk, UnknownAction} from "@reduxjs/toolkit";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
export type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
export type FullfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

export const isPendingAction = (action: UnknownAction): action is PendingAction => action.type.endsWith("/pending");
export const isRejectedAction = (action: UnknownAction): action is RejectedAction => action.type.endsWith("/rejected");
export const isFullfilledAction = (action: UnknownAction): action is FullfilledAction => action.type.endsWith("/fulfilled");
