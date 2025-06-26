import {PropsWithChildren} from "react";
import {className} from "shared/utils";

import styles from "./UserDataCardSkeleton.module.scss";

interface Props {
    isLoading: boolean;
}

const UserDataCardSkeleton: React.FC<PropsWithChildren<Props>> = ({isLoading, children}) => {
    if (!isLoading) return children;

    return (
        <div className={styles.dataCardSkeleton}>
            <div className={styles.title} />
            <ul className={styles.fields}>
                <li className={styles.field}>
                    <div className={styles.fieldLabel} /> <div className={styles.fieldValue} />
                </li>
                <li className={styles.field}>
                    <div className={styles.fieldLabel} /> <div className={styles.fieldValue} />
                </li>
                <li className={styles.field}>
                    <div className={styles.fieldLabel} /> <div className={styles.fieldValue} />
                </li>
                <li className={className(styles.field, styles.avatarField)}>
                    <div className={styles.fieldLabel} />
                    <div className={styles.avatar} />
                </li>
            </ul>
        </div>
    );
};

export default UserDataCardSkeleton;
