import {Route, Routes} from "react-router-dom";

import WebappLayout from "module/common/layout/WebappLayout/WebappLayout";
import CommonRouter from "module/common/router/commonRouter";
import UserRouter from "module/user/router/userRouter";

import {MAIN_ROUTES} from "./mainRoutes";

const MainRouter: React.FC = () => {
    return (
        <WebappLayout>
            <Routes>
                <Route path={`${MAIN_ROUTES.common.base}*`} Component={CommonRouter} />
                <Route path={`${MAIN_ROUTES.user.base}/*`} Component={UserRouter} />
            </Routes>
        </WebappLayout>
    );
};

export default MainRouter;
