import React, {FC} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux'
import {Store} from 'redux';
import configureStore, { IAppState } from './store/Store';
import {getAllUsers} from './actions/UsersActions';

interface IProps {
  store: Store<IAppState>;
}
const Root: FC<IProps> = props => {
  return (
 <React.StrictMode>
    <Provider store={props.store}>
    <App />
    </Provider>
  </React.StrictMode>
  );
};
 
const store = configureStore();
store.dispatch(getAllUsers());
  
 ReactDOM.render(<Root store={store}/>, document.getElementById("root")as HTMLElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
