import React from "react";
import { Input } from "../../inputs/Input";
import "./Main.css";
import { Select } from "../selects/Select";
import { UsersTable } from "../tables/UsersTable";
import { getUsers } from "../../store/actions/UsersActions";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../types/User";
import { UserModal } from "../modals/UserModal";
export const Main = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [searchUsers, setSearchUsers] = React.useState<IUser[]>([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.users);
  const [addModalOpen, setAddModalOpen] = React.useState<Boolean>(false);
  const handleCloseModal = React.useCallback(() => {
    setAddModalOpen(false);
  }, []);
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);
  React.useEffect(() => {
    if (inputValue) {
      return setSearchUsers(
        users.filter(
          (user: IUser) =>
            user.name.substring(0, inputValue.length).toLowerCase() ===
            inputValue.toLowerCase()
        )
      );
    }
    return setSearchUsers(users);
  }, [inputValue, users]);
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
              <Select
                options={
                  searchUsers &&
                  searchUsers.map((user: IUser) => user.company.name)
                }
                onChange={setSelectValue}
              />
            </p>

            <input
              className="button"
              value="Add User"
              type="button"
              onClick={() => setAddModalOpen(true)}
            />
          </div>
          <div className="content_table" id="content_table">
            {searchUsers.length > 0 ? (
              <UsersTable users={searchUsers} selectValue={selectValue} />
            ) : (
              <h2>Information not found</h2>
            )}
          </div>
        </div>
      </div>
      {addModalOpen && <UserModal onClose={handleCloseModal} />}
    </div>
  );
};
