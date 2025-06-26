import {useLocalization} from "contexts";
import {UserTranslation} from "localization";
import {className} from "shared/utils";

import {useAppSelector} from "store/hooks";
import {isLoadingUserSelector, userSelector} from "store/slices/user/selectors";

import UserDataCardSkeleton from "../UserDataCardSkeleton/UserDataCardSkeleton";

import styles from "./UserDataCard.module.scss";

const UserDataCard = () => {
    const translation = useLocalization<UserTranslation>("user");
    const profile = useAppSelector(userSelector);
    const isLoading = useAppSelector(isLoadingUserSelector);

    if (!isLoading && !profile) return null;

    return (
        <UserDataCardSkeleton isLoading={!!isLoading}>
            <div className={styles.dataCard}>
                <h1 className={styles.title}>{translation.profile.title}</h1>
                <ul className={styles.fields}>
                    <li className={styles.field}>
                        <span className={styles.fieldLabel}>{translation.profile.data.firstName}:</span> {profile?.first_name ?? "..."}
                    </li>
                    <li className={styles.field}>
                        <span className={styles.fieldLabel}>{translation.profile.data.lastName}:</span> {profile?.last_name ?? "..."}
                    </li>
                    <li className={styles.field}>
                        <span className={styles.fieldLabel}>{translation.profile.data.email}:</span> {profile?.email ?? "..."}
                    </li>
                    <li className={className(styles.field, styles.avatarField)}>
                        <span className={styles.fieldLabel}>{translation.profile.data.avatar}:</span>
                        <img className={styles.avatar} src={profile?.avatar} alt="avatar" width={40} height={40} />
                    </li>
                </ul>
            </div>
        </UserDataCardSkeleton>
    );
};

export default UserDataCard;
