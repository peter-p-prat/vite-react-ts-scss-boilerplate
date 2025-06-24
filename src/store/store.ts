import {AsyncThunkAction, combineReducers, configureStore} from "@reduxjs/toolkit";
import {getEnvVariable} from "shared/utils";

import {authMiddleware} from "store/middleware/authMiddleware";
import {userReducer} from "store/slices";

const enableDevTools = getEnvVariable("VITE_ENABLE_DEV_TOOLS");

const rootReducer = combineReducers({
    userReducer,
});

export const createStore = (preloadedState?: RootState) =>
    configureStore({
        reducer: rootReducer,
        preloadedState: preloadedState ?? undefined,
        devTools: enableDevTools,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                // Disable immutableCheck middleware in test environments
                immutableCheck: process.env.NODE_ENV !== "test",
                serializableCheck: process.env.NODE_ENV !== "test",
                // eslint-disable-next-line unicorn/prefer-spread
            }).concat(authMiddleware),
    });

export const store = createStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<Return = void, Args = void> = AsyncThunkAction<Return, Args, typeof store>;
