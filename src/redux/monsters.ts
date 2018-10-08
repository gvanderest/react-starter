import { Action } from "redux";
import IMonster from "../types/IMonster";

export const CREATE_MONSTER = "CREATE_MONSTER";

export const actions = {
    createMonster,
};

export interface IState {
    byId: Record<string, IMonster>;
}

const initialState: IState = {
    byId: {},
};

interface ICreateMonsterAction {
    type: typeof CREATE_MONSTER;
    monster: IMonster;
}

export function createMonster(name: string, race: string): ICreateMonsterAction {
    const id = String(Math.random());
    return {
        monster: {
            id,
            name,
            race,
        },
        type: CREATE_MONSTER,
    };
}

export default (state: IState = initialState, action: Action): IState => {
    switch (action.type) {
        case CREATE_MONSTER: {
            const { monster } = action as ICreateMonsterAction;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [monster.id]: {
                        ...monster,
                    }
                },
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
