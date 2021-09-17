import "./UsersTable.scss";
import { IUser } from "../../types/User";
import React from "react";
import { DeleteModal } from "../modals/deleteModals/DeleteModals";
import { UserModal } from "../modals/userModal/UserModal";
interface IProps {
  users: IUser[];
  selectValue: string;
}
export const UsersTable: React.FC<IProps> = React.memo(
  ({ users, selectValue }) => {
    const [sortedUsers, setsortedUsers] = React.useState<IUser[]>([]);
    const [openDelModal, setOpenDelModal] = React.useState<Boolean>(false);
    const [openUserModal, setOpenUserModal] = React.useState<Boolean>(false);
    const [deleteUser, setDeleteUser] = React.useState<IUser>();
    const [changeUser, setChangeUser] = React.useState<IUser>();
    React.useEffect(() => {
      if (selectValue) {
        return setsortedUsers(
          users.filter((user: IUser) => user.company.name === selectValue)
        );
      }
      return setsortedUsers(users);
    }, [users, selectValue]);
    const handleCloseModal = () => {
      setOpenDelModal(false);
    };
    const handleClickDel = (user: IUser) => {
      setDeleteUser(user);
      setOpenDelModal(true);
    };
    const handleCloseUserModal = () => {
      setOpenUserModal(false);
    };
    const handleClickTr = (user: IUser) => {
      setChangeUser(user);
      setOpenUserModal(true);
    };
    return (
      <div>
        {openDelModal && (
          <DeleteModal onClose={handleCloseModal} deleteUser={deleteUser!} />
        )}
        {openUserModal && (
          <UserModal onClose={handleCloseUserModal} changeUser={changeUser} />
        )}
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Company name</th>
              <th>City</th>
              <th>Street</th>
              <th>Website</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers &&
              sortedUsers.map((user: IUser) => (
                <tr key={user.id} onClick={() => handleClickTr(user)}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{user.name}</td>
                  <td> {user.email}</td>
                  <td>{user.company.name}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.street}</td>
                  <td>{user.website}</td>
                  <td>
                    <button
                      type="button"
                      onClick={(event) => {
                        handleClickDel(user);
                        event.stopPropagation();
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
);
