import React from "react";

import {MAIN_ROUTES} from "router/mainRoutes";

import {useAppSelector} from "store/hooks";
import {userSelector} from "store/slices";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const UserLoggedProtectedRoute: React.FC = () => {
    const isUserLoggedIn = useAppSelector(userSelector);

    return <ProtectedRoute isAuthorized={!!isUserLoggedIn} notAuthorizedRedirectPath={MAIN_ROUTES.common.home} />;
};

export default UserLoggedProtectedRoute;
