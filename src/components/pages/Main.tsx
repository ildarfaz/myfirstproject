import React, { useState, useEffect } from "react";
import Table from "../Table";
import InputContent from "../InputContent";
import axios from "axios";
import "./Main.css";
interface iusers {
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
  const [users, setUsers] = useState<iusers[]>([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        params: { _limit: 10 },
      })
      .then((result) => setUsers(result.data));
  }, []);
  const onChangeInput = (value) => {
   
    let nowTable = new Array();
    value = value.toLowerCase();
    users.map((user) => {
      let nameTable = user.name.toLocaleLowerCase().substring(0, value.length);
      if (value === nameTable) {
        nowTable.push(user);
      }
    });
  };
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
          <InputContent onChangeInput={onChangeInput} />
        </div>
        <hr />
        <div className="content_main">
          <div className="content_h">
            <form action="formdata" method="post" name="form1">
              <p>
                Company:
                <select name="list1" id="input2">
                  <option value="">All</option>
                  <option value="Hatchbuck">Hatchbuck</option>
                  <option value="Slack">Slack</option>
                  <option value="Clockify">Clockify</option>
                  <option value="Upwork">Upwork</option>
                  <option value="Trello">Trello</option>
                </select>
              </p>
            </form>
            <input
              className="button"
              type="button"
              value="Add contact"
              id="button1"
            />
          </div>
          <div className="content_table" id="content_table">
            <Table users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
