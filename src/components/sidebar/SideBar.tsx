import {Link} from "react-router-dom";
import "./SideBar.scss";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_link">
        <a href="https://www.google.com/">SaaS Kit</a>
      </div>
      <hr className="wrapper_hr" />
      <div className="sidebar_contact">
        <div className="sidebar_profile">
          <img src="./img/profile_photo.png" alt="some value" />
        </div>
        <div className="sidebar_info">
          <p>Sierra Ferguson</p>
          <a href="mailto:s.ferguson@gmail.com">s.ferguson@gmail.com</a>
        </div>
      </div>
      <div className="sidebar_panel">
        <ul>
          <li className="sidebar_dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="tasks">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="email">
            <Link to="/email">Email</Link>
          </li>
          <li className="contacts">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="chats">
            <Link to="/chats">Chat</Link>
          </li>
          <li className="deals">
            <Link to="/deals">Deals</Link>
          </li>
        </ul>
        <hr />
        <ul>
          <li className="settings">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
