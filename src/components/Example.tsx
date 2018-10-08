import moment from "moment";
import React from "react";
import logo from "../images/react.png";
import connect, { IConnectedProps } from "../redux/connect";
import IMonster from "../types/IMonster";

class Example extends React.Component<IConnectedProps> {
    public componentDidMount() {
        setInterval(this.forceUpdate.bind(this), 1000);

        const { monsters } = this.props.actions;
        monsters.createMonster("a wiry goblin", "goblin");
        monsters.createMonster("a stour dwarf", "dwarf");
    }
    public render() {
        const { monsters } = this.props.store;

        return (
            <div className="react-starter">
                <div className="logo">
                    <img src={logo} />
                </div>
                <h1>React Starter</h1>
                <p>{moment().format("MMMM Do, YYYY HH:mm:ss")}</p>
                <p>If the logo loaded and this content is styled, good news!</p>
                <h2>Redux Test</h2>
                <p>{Object.keys(monsters.byId).length} monsters found:</p>
                <ul>
                    { Object.values(monsters.byId).map((monster: IMonster) => {
                        return (
                            <li key={monster.id}>{monster.name}</li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

export default connect(Example);
