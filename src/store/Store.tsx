import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers/rootReducer'
const initalState = {
}
const middleware = [thunk]
export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));