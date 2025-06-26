import {useLocalization} from "contexts";
import {UserTranslation} from "localization";

import UserDataCard from "module/user/components/UserDataCard/UserDataCard";

import {useAppDispatch, useAppSelector} from "store/hooks";
import {userSelector} from "store/slices/user/selectors";
import {getUserThunk} from "store/slices/user/thunks";

import styles from "./Profile.module.scss";

const Profile = () => {
    const dispatch = useAppDispatch();
    const translation = useLocalization<UserTranslation>("user");
    const profile = useAppSelector(userSelector);

    return (
        <div className={styles.profile}>
            <button
                className={styles.cta}
                onClick={() => {
                    void dispatch(getUserThunk());
                }}
            >
                {profile ? translation.profile.cta.update : translation.profile.cta.get}
            </button>
            <UserDataCard />
        </div>
    );
};

export default Profile;
