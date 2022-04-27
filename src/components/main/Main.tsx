import React from "react";
import { Input } from "../../inputs/Input";
import "./Main.scss";
import { Switch, Route } from "react-router-dom";
import { Contacts } from "../contacts/Contacts";
import { Dashboard } from "../dashboard/Dashboard";
import { SideBar } from "../sidebar/SideBar";
export const Main = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="wrapper">
      <SideBar />
  
      <div className="header_content">
        <div className="header">
          <Input onChange={setInputValue} />
        </div>
        <hr />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/contacts">
            <Contacts inputValue={inputValue} />
          </Route>
          <Route path="/">
            <Contacts inputValue={inputValue} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
