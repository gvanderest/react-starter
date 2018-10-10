import { Action } from "redux";
import IMonster from "../types/IMonster";

export const CREATE_MONSTER = "CREATE_MONSTER";
export const DELETE_MONSTER = "DELETE_MONSTER";

export const actions = {
    createMonster,
    deleteMonster,
};

export interface IState {
    byId: Record<string, IMonster>;
}

const initialState: IState = {
    byId: {
        "example-dwarf": {
            id: "example-dwarf",
            name: "a stout dwarf",
        },
        "example-elf": {
            id: "example-elf",
            name: "a slim elf",
        },
        "example-goblin": {
            id: "example-goblin",
            name: "a wiry goblin",
        },
    },
};

interface ICreateMonsterAction {
    type: typeof CREATE_MONSTER;
    monster: IMonster;
}

export function createMonster(name: string): ICreateMonsterAction {
    const id = String(Math.random());
    return {
        monster: {
            id,
            name,
        },
        type: CREATE_MONSTER,
    };
}

interface IDeleteMonsterAction {
    type: typeof DELETE_MONSTER;
    id: string;
}

export function deleteMonster(id: string): IDeleteMonsterAction {
    return {
        id,
        type: DELETE_MONSTER,
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
        case DELETE_MONSTER: {
            const { id } = action as IDeleteMonsterAction;
            const newState = {
                ...state,
                byId: {
                    ...state.byId,
                },
            };
            delete newState.byId[id];
            return newState;
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
