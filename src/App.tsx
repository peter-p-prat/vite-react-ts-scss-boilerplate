import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import MainRouter from "router/mainRouter";

import {store} from "store/store";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <Provider store={store}>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
