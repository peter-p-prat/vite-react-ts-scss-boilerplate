import {commonRoutes} from "module/common/router/commonRoutes";
import {userRoutes} from "module/user/router/userRoutes";

import {DefaultRoutes} from "./type";

type MainRoutes = Record<string, DefaultRoutes | string>;

export const MAIN_ROUTES = {
    common: {
        ...commonRoutes,
    },
    user: {...userRoutes},
} as const satisfies MainRoutes;

export const REDIRECT_ROUTES = [
    {
        from: "*",
        to: commonRoutes.notFound,
    },
];
