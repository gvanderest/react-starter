import React from "react";
import connect, { IConnectedProps } from "../redux/connect";
import IMonster from "../types/IMonster";

interface IState {
    monsterName: string;
}

class ReduxTestPage extends React.Component<IConnectedProps, IState> {
    constructor(props: IConnectedProps) {
        super(props);
        this.state = {
            monsterName: "",
        };
    }
    public render() {
        const { monsters } = this.props.store;

        return (
            <>
                <p>Testing out that Redux is working properly.</p>
                <p>{ Object.keys(monsters.byId).length } monsters found:</p>
                <ul>
                    { Object.values(monsters.byId).map((monster: IMonster) => {
                        return (
                            <li key={ monster.id }>
                                { monster.name }&nbsp;
                                <button
                                    type="button"
                                    onClick={ () => {
                                        this.props.actions.monsters.deleteMonster(monster.id);
                                    } }
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    }) }
                </ul>
                <p>
                    <input
                        type="text"
                        placeholder="Monster name"
                        value={ this.state.monsterName }
                        onChange={ (e) => {
                            this.setState({
                                monsterName: e.target.value,
                            });
                        } }
                    />
                    <button
                        type="button"
                        onClick={ () => {
                            const { monsterName } = this.state;
                            if (!monsterName) {
                                return;
                            }
                            this.props.actions.monsters.createMonster(monsterName);
                            this.setState({ monsterName: "" });
                        } }
                    >
                        Add
                    </button>
                </p>
            </>
        );
    }
}

export default connect(ReduxTestPage);
