import React, {PropsWithChildren} from "react";

import {Header} from "../Header/Header";

import styles from "./WebappLayout.module.scss";

const WebappLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.webappLayout}>
            <Header />
            <main className={styles.webappLayoutMain}>{children}</main>
        </div>
    );
};

export default WebappLayout;
