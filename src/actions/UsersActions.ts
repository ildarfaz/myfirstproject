import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios';
import { IUser } from '../components/types/User';
export enum UsersActionTypes {
    GET_ALL = 'GET_ALL',
}

export interface IUsersGetAllAction {
    type: UsersActionTypes.GET_ALL;
    users: IUser[];
}
export type UsersActions = IUsersGetAllAction;

export const getAllUsers : ActionCreator<
ThunkAction<Promise<any>, IUser,null, IUsersGetAllAction>
> = () => {
    return async (dispatch: Dispatch) => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
            dispatch({
                users: result.data,
                type: UsersActionTypes.GET_ALL,
            });
        }catch(err) {
            console.log(err);
        }
    }
}

