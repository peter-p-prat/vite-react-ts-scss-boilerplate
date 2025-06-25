import {LanguageSelector} from "components/LanguageSelector";
import {useLocalization} from "contexts";
import {HomeTranslation} from "localization";
import {Provider} from "react-redux";
import {className, getEnvVariable, styleByKey} from "shared/utils";
import {translateWithParams} from "shared/utils/common";

import {store} from "store/store";

import styles from "./App.module.scss";

const App = () => {
    const stack = getEnvVariable("VITE_BOILERPLATE_STACK").split(",");
    const stackString = stack.map((item) => item).join(" + ");
    const translation = useLocalization<HomeTranslation>("homePage");

    return (
        <Provider store={store}>
            <div className={styles.app}>
                <h1>{translation.helloWorld}</h1>
                <p>{translateWithParams(translation.description.title, {stack: stackString})}</p>

                <div className={styles.stack}>
                    {stack.map((item) => (
                        <span className={className(styles.stackLogo, styleByKey(styles, item.toLowerCase()))} key={item} />
                    ))}
                </div>

                <p>{translation.description.subtitle}</p>

                <p>
                    <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        {translation.links.react}
                    </a>
                    {" | "}
                    <a className={styles.appLink} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        {translation.links.vite}
                    </a>
                </p>
                <LanguageSelector />
            </div>
        </Provider>
    );
};

export default App;
