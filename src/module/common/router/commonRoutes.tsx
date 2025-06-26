import {DefaultRoutes} from "router/type";

export const commonRoutes = {
    base: "/",
    home: "/",
    notFound: "/404",
} as const satisfies DefaultRoutes;
