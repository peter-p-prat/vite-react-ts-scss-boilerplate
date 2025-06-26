import React from "react";
import {Route, Routes} from "react-router-dom";

// import UserLoggedProtectedRoute from "router/components/UserLoggedProtectedRoute/UserLoggedProtectedRoute";
import RedirectRouter from "router/redirectRouter";
import {useRelativePath} from "router/util";

import {Profile} from "../pages";

import {userRoutes} from "./userRoutes";

const UserRouter: React.FC = () => {
    console.info(useRelativePath(userRoutes, userRoutes.profile));
    return (
        <Routes>
            <Route path="*" Component={RedirectRouter} />
            <Route path={useRelativePath(userRoutes, userRoutes.profile)} Component={Profile} />
            {/* <Route element={<UserLoggedProtectedRoute />}>
                <Route path="user/profile" Component={Profile} />
            </Route> */}
        </Routes>
    );
};

export default UserRouter;
