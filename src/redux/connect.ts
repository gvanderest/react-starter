import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { IReduxStore, reduxActions } from "../settings";

interface IStoreProps {
    store: IReduxStore;
}

const mapStateToProps = (state: IReduxStore): IStoreProps => {
    return {
        store: state,
    };
};

type Dispatch = (action: AnyAction) => any;

interface IDispatchProps {
    actions: {
        dispatch: Dispatch;
        [key: string]: any;
    } & typeof reduxActions;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    const connectedActions: IDispatchProps = {
        actions: {
            ...reduxActions,
            dispatch,
        },
    };

    // Bind the actions to dispatch
    for (const key of Object.keys(reduxActions)) {
        connectedActions.actions[key] = bindActionCreators(connectedActions.actions[key], dispatch);
    }

    return connectedActions;
};

export type IConnectedProps<IProps = {}> = IStoreProps & IDispatchProps & IProps;

export default connect<IStoreProps, IDispatchProps, {}, IReduxStore>(mapStateToProps, mapDispatchToProps);
