import React from "react";
import {LocalizationProvider} from "contexts";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")!).render(
    <React.StrictMode>
        <LocalizationProvider>
            <App />
        </LocalizationProvider>
    </React.StrictMode>,
);
