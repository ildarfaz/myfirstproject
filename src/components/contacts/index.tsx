import { useCallback, useEffect, useState } from "react";

import { Select } from "../selects/Select";
import { UsersTable } from "../tables/UsersTable";
import { IUser } from "../../types/User";
import { getUsers } from "../../store/actions/UsersActions";
import { UserModal } from "../modals/userModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../types/actions";

import styles from './style.module.scss';

interface IProps {
  inputValue: string;
}
export const Contacts: React.FC<IProps> = ({ inputValue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: any) => state.users);
  const [selectValue, setSelectValue] = useState("");
  const [searchUsers, setSearchUsers] = useState<IUser[]>([]);
  const [addModalOpen, setAddModalOpen] = useState<Boolean>(false);
  const handleCloseModal = useCallback(() => {
    setAddModalOpen(false);
  }, []);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
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
    <div className={styles.content_main}>
      {addModalOpen && <UserModal onClose={handleCloseModal} />}
      <div className={styles.content_h}>
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
          className={styles.content_btn}
          onClick={() => setAddModalOpen(true)}
        >
          Add User
        </button>
      </div>
      <div className={styles.content_table}>
        {searchUsers.length !== 0 ? (
          <UsersTable users={searchUsers} selectValue={selectValue} />
        ) : (
          <h2>Information not found</h2>
        )}
      </div>
    </div>
  );
};
