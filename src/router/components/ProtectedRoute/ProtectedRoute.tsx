import React from "react";
import {Navigate, Outlet} from "react-router-dom";

interface ProtectedRouteProps {
    isAuthorized: boolean;
    notAuthorizedRedirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({isAuthorized, notAuthorizedRedirectPath}) => {
    return <>{isAuthorized ? <Outlet /> : <Navigate to={{pathname: notAuthorizedRedirectPath}} />}</>;
};

export default ProtectedRoute;
