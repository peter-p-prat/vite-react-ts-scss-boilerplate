import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {REDIRECT_ROUTES} from "router/mainRoutes";

interface Props {
    redirectRoutes?: typeof REDIRECT_ROUTES;
}

const RedirectRouter: React.FC<Props> = ({redirectRoutes = REDIRECT_ROUTES}) => {
    return (
        <Routes>
            {redirectRoutes.map(({from, to}) => (
                <Route key={from} path={from} element={<Navigate to={to} />} />
            ))}
        </Routes>
    );
};

export default RedirectRouter;
