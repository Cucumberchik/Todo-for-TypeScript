import { createStore, Action } from "redux";
import { TypeUser } from "../type";

interface IState {
    users: TypeUser[];
}

const initialState: IState = {
    users: [],
};

enum ActionTypes {
    addUser = "ADD_USER",
    editUser = "EDIT_USER",
    deleteUser = "DELETE_USER"
}

interface AddUserAction extends Action {
    type: ActionTypes;
    payload: any;
}

type TypeAction = AddUserAction;

const Reducer = (state: IState = initialState, action: TypeAction): IState => {
    switch (action.type) {
        case ActionTypes.addUser:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case ActionTypes.deleteUser:
            return { ...state, users: state.users.filter(el => el.id !== action.payload) }
        case ActionTypes.editUser:
            return { ...state, users: state.users.map(el => el.id === action.payload.id ? action.payload : el) }
        default:
            return state;
    }
};

export const store = createStore(Reducer);
