import * as Monsters from "./redux/monsters";

// The object for Reducers bound to Component props
export const reduxReducers = {
    monsters: Monsters.default,
};

// The object for ActionCreators bound to Component props
export const reduxActions = {
    monsters: Monsters,
};

// The shape of the data in the Redux store
export interface IReduxStore {
    monsters: Monsters.IState;
}
