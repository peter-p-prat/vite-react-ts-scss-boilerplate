import React from "react";
import {Route, Routes} from "react-router-dom";

import {Home} from "../pages";

import {commonRoutes} from "./commonRoutes";
import RedirectRouter from "./redirectRouter";

const CommonRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="*" Component={RedirectRouter} />
            <Route path={commonRoutes.home} Component={Home} />
        </Routes>
    );
};

export default CommonRouter;
