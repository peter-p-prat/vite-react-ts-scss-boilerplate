import React from "react";
import {useNavigate} from "react-router-dom";

import {LanguageSelector} from "module/common/components/LanguageSelector/LanguageSelector";
import {commonRoutes} from "module/common/router/commonRoutes";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerContentLeft}>
                    <button type="button" className={styles.title} onClick={() => void navigate(commonRoutes.home)}>
                        HEADER
                    </button>
                </div>
                <LanguageSelector showLabel={false} />
            </div>
        </div>
    );
};
