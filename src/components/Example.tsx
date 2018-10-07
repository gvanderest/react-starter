import * as React from "react";
import logo from "../images/react.png";
// const logo = require("../images/react.png");

export default class Example extends React.Component {
    public componentDidMount() {
        setInterval(this.forceUpdate.bind(this), 1000);
    }
    public render() {
        return (
            <div className="react-starter">
                <div className="logo">
                    <img src={logo} />
                </div>
                <h1>React Starter</h1>
                <p>If the logo loaded and this content is styled, good news!</p>
            </div>
        );
    }
}
