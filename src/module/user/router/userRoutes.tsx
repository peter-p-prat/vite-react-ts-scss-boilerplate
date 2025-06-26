import {DefaultRoutes} from "router/type";

export const userRoutes = {
    base: "/user",
    profile: "/user/profile",
} as const satisfies DefaultRoutes;
