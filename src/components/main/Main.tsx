import React from "react";
import { Input } from "../../inputs/Input";
import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts inputValue={inputValue} />} />
          <Route path="/" element={<Contacts inputValue={inputValue} />} />
        </Routes>
      </div>
    </div>
  );
};
