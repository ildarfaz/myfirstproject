import "./UsersTable.css";
import { IUser } from "../types/User";
import React from "react";
interface IProps {
  users: IUser[];
  selectValue: string;
}
export const UsersTable = ({ users, selectValue }: IProps) => {
  console.log("test");
  const [sortedUsers, setsortedUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    if (selectValue) {
      return setsortedUsers(
        users.filter((user: IUser) => user.company.name === selectValue)
      );
    }
    return setsortedUsers(users);
  }, [users, selectValue]);
  return (
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
        </tr>
      </thead>
      <tbody>
        {sortedUsers &&
          sortedUsers.map((user: IUser) => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td> {user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>{user.website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
