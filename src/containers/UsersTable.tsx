import * as React from 'react';
import { connect } from 'react-redux';
import "../components/UsersTable.css";
import { IAppState } from '../store/Store';

import { IUser } from "../components/types/User";


interface IProps {
  users: IUser[];
}

class UsersTable extends React.Component<IProps> {
  public render() {
    const { users } = this.props;
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
        {users &&
          users.map((user: IUser) => (
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
  }
}


const mapStateToProps = (store: IAppState) => {
  return {
    users: store.usersState.users,
  };
};

export default connect(mapStateToProps)(UsersTable);