import React from "react";
import { Select } from "../selects/Select";
import { UsersTable } from "../tables/UsersTable";
import { IUser } from "../../types/User";
import { getUsers } from "../../store/actions/UsersActions";
import { UserModal } from "../modals/userModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import "./Contacts.scss";
interface IProps {
  inputValue: string;
}
export const Contacts: React.FC<IProps> = ({ inputValue }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.users);
  const [selectValue, setSelectValue] = React.useState("");
  const [searchUsers, setSearchUsers] = React.useState<IUser[]>([]);
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
    <div className="content_main">
      {addModalOpen && <UserModal onClose={handleCloseModal} />}
      <div className="content_h">
        <p>
          Company:
          <Select
            options={
              searchUsers && searchUsers.map((user: IUser) => user.company.name)
            }
            onChange={setSelectValue}
          />
        </p>
        <button
          className="button"
          type="button"
          onClick={() => setAddModalOpen(true)}
        >
          Add User
        </button>
      </div>
      <div className="content_table">
        {searchUsers.length !== 0 ? (
          <UsersTable users={searchUsers} selectValue={selectValue} />
        ) : (
          <h2>Information not found</h2>
        )}
      </div>
    </div>
  );
};
