import React, { useState, useEffect } from "react";
import { Input } from "../Input";
import "./Main.css";
import { Select } from "../Select";
import { UsersTable } from "../UsersTable";
import { getUsers } from "../../store/actions/UsersActions";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../types/User";
export const Main = () => { 
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch()
  const usersList = useSelector((state:any) => state.users)
  const {users} = usersList;
  window.onbeforeunload = () => {
    return false;
  };
  useEffect(() => {      
    dispatch(getUsers());
  }, [dispatch, selectValue]);
  return (
    <div className="wrapper">
      <div className="chat">
        <div className="chat_link">
          <a href="https://www.google.com/">SaaS Kit</a>
        </div>
        <hr className="wrapper_hr" />
        <div className="chat_contact">
          <div className="chat_profile">
            <img src="./img/profile_photo.png" alt="some value" />
          </div>
          <div className="chat_info">
            <p>Sierra Ferguson</p>
            <a href="mailto:s.ferguson@gmail.com">s.ferguson@gmail.com</a>
          </div>
        </div>
        <div className="chat_panel">
          <ul>
            <li className="dashboard">
              <a href="#/">Dashboard</a>
            </li>
            <li className="tasks">
              <a href="#/">Tasks</a>
            </li>
            <li className="email">
              <a href="#/">Email</a>
            </li>
            <li className="contacts">
              <a href="#/">Contacts</a>
            </li>
            <li className="chats">
              <a href="#/">Chat</a>
            </li>
            <li className="deals">
              <a href="#/">Deals</a>
            </li>
          </ul>
          <hr />
          <ul>
            <li className="settings">
              <a href="#/">Settings</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header_content">
        <div className="header">
          <Input onChange={setInputValue} />
        </div>
        <hr />
        <div className="content_main">
          <div className="content_h">
            <p>
              Company:
              <Select options={users.map((user:IUser)=>user.company.name)} onChange={setSelectValue} />
            </p>
            <input
              className="button"
              type="button"
              value="Add contact"
              id="button1"
            />
          </div>
          <div className="content_table" id="content_table">
            <UsersTable users={users} selectValue={selectValue}/>
          </div>
        </div>
      </div>
    </div>
  );
};