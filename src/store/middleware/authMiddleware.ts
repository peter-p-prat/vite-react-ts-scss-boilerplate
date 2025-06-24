import {Action, Middleware, UnknownAction} from "redux";
import {isUnauthorizedError} from "shared/utils/network";

import {logoutThunk} from "store/slices/user/mutations";
import {RootState} from "store/store";
import {isRejectedAction} from "store/type";

import {MiddlewareAction} from "./type";

export const authMiddleware: Middleware<object, RootState> = (store) => (next) => (middlewareAction) => {
    const action = middlewareAction as MiddlewareAction;
    if (isRejectedAction(middlewareAction as UnknownAction) && isUnauthorizedError(action.payload)) {
        const isUserLoggedIn = !!store.getState().userReducer.user?.email;

        if (isUserLoggedIn) {
            store.dispatch(logoutThunk() as unknown as Action);
        }
    }

    return next(action);
};
