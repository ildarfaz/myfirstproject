import { applyMiddleware, combineReducers, createStore,  Store } from "redux";
import thunk from "redux-thunk";
import { IUsers } from "../components/types/User";
import { usersReducer } from "../reducers/usersReducer";

export interface IAppState {
    usersState: IUsers;
}

const rootReducer = combineReducers<IAppState>({
    usersState: usersReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}