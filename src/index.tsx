import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Example from "./components/Example";

import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Example />
    </Provider>,
    document.getElementById("application"),
);
