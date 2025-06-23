import {className, getEnvVariable, styleByKey} from "shared/utils";

import logo from "assets/images/logo.svg";

import styles from "./App.module.scss";

const App = () => {
    const stack = getEnvVariable("VITE_BOILERPLATE_STACK").split(",");

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />

                <p>Hello {stack.map((item) => item).join(" + ")}!</p>

                <div className={styles.stack}>
                    {stack.map((item) => (
                        <span className={className(styles.stackLogo, styleByKey(styles, item.toLowerCase()))} key={item} />
                    ))}
                </div>

                <p>This is a boilerplate project.</p>
                <p>It includes HMR, ESLint, Prettier, SCSS Modules, and more.</p>

                <p>
                    <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {" | "}
                    <a className={styles.appLink} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
};

export default App;
