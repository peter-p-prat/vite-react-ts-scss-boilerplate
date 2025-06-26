import {useLocalization} from "contexts";
import {HomeTranslation} from "localization";
import {useNavigate} from "react-router-dom";
import {className, getEnvVariable, styleByKey} from "shared/utils";
import {translateWithParams} from "shared/utils/common";

import {userRoutes} from "module/user/router/userRoutes";

import styles from "./Home.module.scss";

const Home = () => {
    const stack = getEnvVariable("VITE_BOILERPLATE_STACK").split(",");
    const stackString = stack.map((item) => item).join(" + ");
    const translation = useLocalization<HomeTranslation>("homePage");
    const navigate = useNavigate();

    return (
        <div className={styles.home}>
            <h1>{translation.helloWorld}</h1>
            <p>{translateWithParams(translation.description.title, {stack: stackString})}</p>

            <div className={styles.stack}>
                {stack.map((item) => (
                    <span className={className(styles.stackLogo, styleByKey(styles, item.toLowerCase()))} key={item} />
                ))}
            </div>

            <p>{translation.description.subtitle}</p>

            <button
                className={styles.navigateButton}
                onClick={() => {
                    void navigate(userRoutes.profile);
                }}
            >
                {translation.cta}
            </button>
        </div>
    );
};

export default Home;
