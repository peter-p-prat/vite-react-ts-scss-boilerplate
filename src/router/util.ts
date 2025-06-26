import {DefaultRoutes} from "./type";

/**
 * Used in Router Routes path, as the navigation here has to be relative to the parent defined in the Main Router
 * It includes the base route at the beginning of the route path
 *  */
export const useRelativePath = (routes: DefaultRoutes, routePath: string): string => {
    // return `${routes.base}${routePath}`;
    return routePath.slice(routes.base.length + 1);
};
