import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";
import "uikit/dist/css/uikit.min.css";
function main(serviceWorker) {
    ReactDOM.render(<App />, document.getElementById("root"));
    if (serviceWorker) {
        registerServiceWorker();
    }    
}
main(false);