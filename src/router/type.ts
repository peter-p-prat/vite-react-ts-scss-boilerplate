export interface RedirectRoute {
    from: string;
    to: string;
}

export interface DefaultRoutes {
    base: string;
    [route: string]: string;
}
