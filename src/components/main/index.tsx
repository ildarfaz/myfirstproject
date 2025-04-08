import { useState } from "react";

import { Input } from "../../input/Input";

import { Routes, Route } from 'react-router-dom';
import { Contacts } from "../contacts";
import { Dashboard } from "../dashboard";
import { SideBar } from "../sidebar/SideBar";

import style from "./styles.module.scss";
export const Main = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={style.wrapper}>
      <SideBar />

      <div className={style.header_content}>
        <div className={style.header}>
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
