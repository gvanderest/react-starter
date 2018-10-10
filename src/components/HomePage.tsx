import moment from "moment";
import React from "react";
import connect, { IConnectedProps } from "../redux/connect";

interface IState {
    intervalId?: number;
}

class Home extends React.Component<IConnectedProps, IState> {
    public componentDidMount() {
        this.setState({
            intervalId: window.setInterval(this.forceUpdate.bind(this), 1000),
        });
    }
    public componentWillUnmount() {
        const { intervalId } = this.state;
        window.clearInterval(intervalId);
    }
    public render() {
        return (
            <>
                <p>{ moment().format("MMMM Do, YYYY HH:mm:ss") }</p>
                <p>If the logo loaded and this content is styled, good news!</p>
            </>
        );
    }
}

export default connect(Home);
