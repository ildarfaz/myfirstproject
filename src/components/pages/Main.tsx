import React, { useState, useEffect } from "react";
import Table from "../Table";
import Input from "../Input";
import axios from "axios";
import "./Main.css";
import Select from "../Select";
interface IUsers {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
    street: string;
  };
}

function Main() {
  const [inputValue, setInputValue] = useState("");
  const[selectValue, setSelectValue] = useState("");
  const [companyName, setCompanyName] = useState<string[]>([]);
  const onChangeInput = (value) => {
    setInputValue(value);
  };
  const onChangeSelect = (value) => {
    setSelectValue(value);
    
  }
  const [users, setUsers] = useState<IUsers[]>([]);
  useEffect(() => {
    let nowCompany = new Array<string>();
    let nowTable = new Array();
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        params: { _limit: 10 },
      })
      .then((result) => {
        if (inputValue !=="") {
          
          let nowValue = inputValue.toLowerCase();
          result.data.map((user) => {
            let nameTable = user.name.toLocaleLowerCase().substring(0, nowValue.length);
            if (nowValue === nameTable) {
              nowTable.push(user);
              nowCompany.push(user.company.name);
            }
          })
          if (selectValue!=="") {
            nowTable = nowTable.filter(user => user.company.name===selectValue);
          }
           return setUsers(nowTable),setCompanyName(nowCompany);
        } 
        result.data.map((user) => {
        nowCompany.push(user.company.name);
        });
        nowTable = result.data;
        if (selectValue!=="") {
          nowTable = nowTable.filter(user => user.company.name===selectValue);
        }
        setCompanyName(nowCompany);
        setUsers(nowTable);
      });},[inputValue,selectValue])
      
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
          <Input onChangeInput={onChangeInput}/>
        </div>
        <hr />
        <div className="content_main">
          <div className="content_h">
             <Select  companyName={companyName} onChangeSelect={onChangeSelect}/>
            <input
              className="button"
              type="button"
              value="Add contact"
              id="button1"
            />
          </div>
          <div className="content_table" id="content_table">
            <Table users={users}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
