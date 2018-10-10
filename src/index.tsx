import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ReduxTestPage from "./components/ReduxTestPage";
import logo from "./images/react.png";
import store from "./redux/store";

ReactDOM.render(
    <div className="react-starter">
        <Provider store={ store }>
            <BrowserRouter>
                <>
                    <div className="logo">
                        <img src={ logo } />
                    </div>

                    <h1>React Starter</h1>

                    <p className="links">
                        <NavLink exact to="/" activeClassName="selected">Home</NavLink>&nbsp;|&nbsp;
                        <NavLink exact to="/redux" activeClassName="selected">Redux</NavLink>
                    </p>

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/redux">
                            <ReduxTestPage />
                        </Route>
                    </Switch>
                </>
            </BrowserRouter>
        </Provider>
    </div>,
    document.getElementById("application"),
);
