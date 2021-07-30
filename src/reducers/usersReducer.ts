import { Reducer } from "redux";
import { IUser } from "../components/types/User";
import {
    UsersActions,
    UsersActionTypes,
} from '../actions/UsersActions';

export interface IUserState {
    readonly users: IUser[];
}
const initialUsersState: IUserState = {
    users: [],
};
export const usersReducer: Reducer<IUserState, UsersActions> = (
    state = initialUsersState,
    action
) => {
    switch(action.type) {
        case UsersActionTypes.GET_ALL: {
            return {
                ...state,
                users: action.users,
            };
        }
        default:
            return state;
    }
};